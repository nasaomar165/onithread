import React from "react";
import { CheckCircleIcon ,Instagram } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { TwitterIcon } from "@/components/icons/TwitterIcon";

export default function InstagramCaptionsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 flex items-center mt-16">
          <Instagram className="w-10 h-10 mr-3 text-pink-500" />
          Creating Engaging Instagram Captions
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Using Our Project</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Navigate to the Dashboard</li>
              <li>Select Instagram caption generator</li>
              <li>Enter your post topic </li>
              <li>Upload your image to let the AI describe it for you</li>
              <li>Click "Generate Caption"</li>
              <li>Copy and paste the caption to your Instagram post</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            Tips for Crafting Engaging Captions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Know Your Audience: Tailor your tone and content to your followers.",
              "Use Emojis: Add visual appeal and emotion to your captions.",
              "Include a Call-to-Action: Encourage likes, comments, or shares.",
              "Tell a Story: Share the context behind your photo or video.",
              "Use Hashtags Wisely: Include relevant hashtags to increase discoverability.",
              "Keep it Concise: Instagram captions are truncated after 125 characters.",
              "Ask Questions: Boost engagement by encouraging responses.",
              "Experiment with Length: Mix short and long captions to see what works best.",
            ].map((tip, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg"
              >
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{tip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 text-xl text-gray-400 italic text-center">
          Remember, authenticity is key on Instagram. Use our tool for inspiration, but always infuse your unique personality into your captions!
        </p>
      </main>
    </div>
  );
}
