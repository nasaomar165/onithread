import React from "react";
import { CheckCircleIcon ,Sparkles  } from "lucide-react";
import { Navbar } from "@/components/Navbar";


export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 flex items-center mt-16">
          <Sparkles  className="w-10 h-10 mr-3 text-blue-400" />
          Key Features of Our AI-Powered Thread Generator
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Core Functionality</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Create a post seemlessly with on click of a button</li>
              <li>Harness the power of AI to generate content</li>
              <li>Preview your post before publishing</li>
              <li>View resent posts history</li>
              <li>Inistantly share your post to your desired platform</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Topic Research: AI-assisted research for relevant content and statistics.",
              "Hashtag Suggestions: Intelligent hashtag recommendations for better reach.",
              "Engagement Optimization: AI-driven suggestions for optimal posting times.",
              "Multi-language Support: Generate threads in multiple languages.",
              "Image Integration: Automatically suggest and integrate relevant images.",
              "Thread Templates: Pre-designed templates for various content types.",
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg"
              >
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 text-xl text-gray-400 italic text-center">
          Our AI-powered Thread Generator combines cutting-edge technology with user-friendly design to help you create engaging, viral-worthy content effortlessly.
        </p>
      </main>
    </div>
  );
}
