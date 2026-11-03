# SCIENCE PRECALL AI – Your Personal General Science Mentor for MPSC
**Created by:** Akash Jadhav  
**Brand:** Science PreCall 2.0  
**Tagline:** *Science Made Simple. Selection Made Possible.*

---

## 1. Project Overview
**SCIENCE PRECALL AI** is a bilingual (Devanagari Marathi + English) General Science AI Mentor built specifically for Maharashtra competitive examination aspirants (**MPSC Rajyaseva, MPSC Group B, MPSC Group C, Combine Prelims & Mains**).

### Core Highlights
- **7 Complete MPSC Science Domains**: Physics, Chemistry, Botany, Zoology, Hygiene & Public Health, ICT, and Remote Sensing.
- **Strict Bilingual Answering Architecture**:
  - `प्रश्न (Question)` + Automatic Subject & Subtopic Detection
  - `मराठी स्पष्टीकरण` (Simple, accurate Devanagari Marathi)
  - `English Explanation` (Clear scientific explanation)
  - `महत्त्वाचे मुद्दे (Key Points)` (Facts, Terminology, Formulas, Step-by-step Numericals, Text Diagrams, Comparison Tables, Mnemonics)
  - `MPSC Exam Perspective` (Prelims/Mains relevance, High-yield facts, Verified PYQ connections, Expected MCQ concepts)
- **4 Special MPSC Teaching Modes**:
  1. **BASIC MODE** – Beginner-friendly conceptual clarity
  2. **MPSC EXAM MODE** – Exam-oriented high-yield facts, units, exceptions & definitions
  3. **DEEP CONCEPT MODE** – Underlying scientific mechanisms, pathways & derivations
  4. **MCQ PRACTICE MODE** – Generates 5 or 10 MPSC-level bilingual MCQs with interactive grading and explanations of **all four options**
- **Retrieval-Augmented Generation (RAG) Knowledge Base**:
  - Upload and index verified chapters from **Science PreCall 2.0 PDF Textbook**, chapter-wise notes, PYQ banks, and revision notes.
  - Displays verified citations (**Source PDF Name**, **Chapter Name**, **Page Number**) and clearly distinguishes **Verified Textbook Material** from **General AI Knowledge**.
- **Resilient Dual-Engine Architecture**:
  - Secure server-side **Google Gemini API (`@google/genai`)** route (`/api/chat`) that keeps `GEMINI_API_KEY` hidden on the backend.
  - Built-in **Rule-Based Bilingual Fallback Chatbot Engine** so students can continue learning even offline or when the API key is unconfigured.

---

## 2. Project Folder Structure
```text
science-precall-ai/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         # Secure backend API endpoint (Google GenAI SDK + RAG + Fallback)
│   ├── globals.css              # Tailwind CSS + Noto Sans Devanagari & Inter typography
│   ├── layout.tsx               # Root application layout & metadata
│   └── page.tsx                 # Main Science PreCall AI interactive frontend
├── lib/
│   ├── systemPrompt.ts          # Official Science PreCall AI system instructions
│   └── ragStore.ts              # Science PreCall 2.0 RAG knowledge base & retrieval engine
├── .env.example                 # Environment variable template (GEMINI_API_KEY)
├── package.json                 # Dependencies (@google/genai, next, react, lucide-react, tailwindcss)
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Setup, API key configuration & deployment guide
```

---

## 3. How to Obtain & Configure Your Gemini API Key
1. Visit **Google AI Studio**: [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Sign in with your Google Account and click **"Create API Key"**.
3. In the project root directory, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Open `.env.local` and paste your API key:
   ```env
   GEMINI_API_KEY="AIzaSyYourActualKeyHere..."
   GEMINI_MODEL="gemini-2.5-flash"
   ```
   > **Security Note:** Never prefix `GEMINI_API_KEY` with `NEXT_PUBLIC_`. Keeping it as `GEMINI_API_KEY` guarantees it is only accessible inside `app/api/chat/route.ts` on the server.

---

## 4. Local Development Instructions
```bash
# 1. Unzip the project and navigate into the folder
cd science-precall-ai

# 2. Install dependencies
npm install

# 3. Configure your environment variables
cp .env.example .env.local
# (Add your GEMINI_API_KEY inside .env.local)

# 4. Start the development server
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 5. Deployment Instructions (Vercel / Google Cloud Run / Render)
### Option A: Deploy on Vercel (Recommended for Next.js)
1. Push the `science-precall-ai` repository to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new) and import your repository.
3. Under **Environment Variables**, add:
   - `GEMINI_API_KEY` = `your_gemini_api_key`
   - `GEMINI_MODEL` = `gemini-2.5-flash`
4. Click **Deploy**. Your bilingual MPSC tutor will be live with HTTPS!
