import React from "react";
import { CheckCircleIcon, User } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 flex items-center mt-16">
          <User className="w-10 h-10 mr-3 text-blue-600" />
          How Our Project Works
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Sign up for an account</li>
              <li>Receive 20 points as part of the free plan</li>
              <li>Navigate to the content generation page</li>
              <li>Choose your desired social media platform</li>
              <li>Generate a post (costs 5 points per generation)</li>
              <li>Review and share your generated content</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            Key Features of Our Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "User Signup: Create an account to get started.",
              "Free Plan: Each new user receives 20 points upon signup.",
              "Point System: Generate content using your points.",
              "Cost Per Post: Each generated post costs 5 points.",
              "Multiple Platforms: Create content for various social media.",
              "AI-Powered: Utilizes advanced AI for content generation.",
              "Content History: View and reuse your generated posts.",
              "Point Purchase: Buy more points through Stripe integration.",
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
          Start creating engaging social media content with our AI-powered tool. Sign up now to get your free points and experience the future of content creation!
        </p>
      </main>
    </div>
  );
}