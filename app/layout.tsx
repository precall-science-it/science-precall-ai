import React from "react";
import "./globals.css";

export const metadata = {
  title: "SCIENCE PRECALL AI – Your Personal General Science Mentor for MPSC | By Akash Jadhav",
  description: "Bilingual (Marathi & English) General Science AI Mentor for MPSC Rajyaseva, Group B & Group C Aspirants. Created by Akash Jadhav (Science PreCall 2.0).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mr">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
