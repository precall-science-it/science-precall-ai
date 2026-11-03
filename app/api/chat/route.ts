// app/api/chat/route.ts
// Secure Backend Endpoint for SCIENCE PRECALL AI
// Never exposes GEMINI_API_KEY to the frontend client.

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { SCIENCE_PRECALL_SYSTEM_PROMPT } from "@/lib/systemPrompt";
import { searchRagChunks, RagChunk } from "@/lib/ragStore";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      message,
      subject = "Auto-Detect",
      mode = "MPSC_EXAM",
      mcqCount = 5,
      history = [],
      customRagChunks = []
    } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Please provide a valid science question." },
        { status: 400 }
      );
    }

    // 1. Retrieve relevant textbook chunks from Science PreCall 2.0 RAG Store
    const matchedChunks = searchRagChunks(message, customRagChunks.length ? customRagChunks : undefined);

    const ragContext = matchedChunks.length > 0
      ? matchedChunks.map((c: RagChunk) =>
          `[VERIFIED TEXTBOOK SOURCE]\nPDF: ${c.pdfName}\nChapter: ${c.chapterName}\nPage: ${c.pageNumber}\nMarathi Content: ${c.contentMarathi}\nEnglish Content: ${c.contentEnglish}\nKey Facts: ${c.keyFacts.join("; ")}`
        ).join("\n\n")
      : "No exact uploaded PDF textbook match found. Answer using accurate General AI Scientific Knowledge and explicitly mark source as General AI Knowledge.";

    const apiKey = process.env.GEMINI_API_KEY;

    // 2. If GEMINI_API_KEY is configured, call the official Google GenAI SDK
    if (apiKey && apiKey !== "your_actual_gemini_api_key_here") {
      const ai = new GoogleGenAI({ apiKey });
      const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";

      const modeInstructions: Record<string, string> = {
        BASIC: "MODE A (BASIC MODE): Explain concepts for beginners using simple analogies in both Marathi and English.",
        MPSC_EXAM: "MODE B (MPSC EXAM MODE): Focus on high-yield exam facts, SI units, scientists, exceptions, definitions, and MPSC Prelims/Mains oriented points.",
        DEEP_CONCEPT: "MODE C (DEEP CONCEPT MODE): Explain the deep scientific mechanism, underlying principles, step-by-step derivations, and text-based scientific diagrams.",
        MCQ_PRACTICE: `MODE D (MCQ PRACTICE MODE): Generate ${mcqCount} MPSC-level General Science MCQs on this topic with Bilingual Question, 4 Options (A, B, C, D), Correct Answer, and Detailed Bilingual Explanation of ALL FOUR OPTIONS.`
      };

      const conversationHistoryText = history
        .slice(-6)
        .map((m: { role: string; text: string }) => `${m.role.toUpperCase()}: ${m.text}`)
        .join("\n");

      const fullPrompt = `
Selected Subject Filter: ${subject}
Selected Teaching Mode: ${modeInstructions[mode] || modeInstructions.MPSC_EXAM}

Retrieved Science PreCall 2.0 Knowledge Base (RAG):
${ragContext}

Recent Conversation Context:
${conversationHistoryText}

Student Question: ${message}
`;

      const response = await ai.models.generateContent({
        model: modelName,
        contents: fullPrompt,
        config: {
          systemInstruction: SCIENCE_PRECALL_SYSTEM_PROMPT,
          temperature: 0.3,
        },
      });

      return NextResponse.json({
        reply: response.text,
        sourceType: matchedChunks.length > 0 ? "TEXTBOOK_RAG" : "GENERAL_AI",
        citations: matchedChunks.map((c) => ({
          pdfName: c.pdfName,
          chapterName: c.chapterName,
          pageNumber: c.pageNumber,
        })),
        engine: modelName,
      });
    }

    // 3. Automatic Rule-Based Fallback if API key is not configured or unavailable
    return NextResponse.json({
      fallback: true,
      message: "GEMINI_API_KEY not found in server environment; using built-in Science PreCall 2.0 Bilingual Rule-Based Engine.",
      citations: matchedChunks,
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : "Unknown backend error";
    return NextResponse.json(
      {
        fallback: true,
        error: errMsg,
        message: "Switched to built-in rule-based fallback engine.",
      },
      { status: 200 }
    );
  }
}
