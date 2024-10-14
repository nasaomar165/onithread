import React from "react";
import { BookMarked  } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function InstagramCaptionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <BookMarked  className="w-10 h-10 mr-3 text-white" />
          API Reference
        </h1>
        <p className="text-2xl text-gray-400 text-center">
          Coming Soon
        </p>
      </main>
    </div>
  );
}
