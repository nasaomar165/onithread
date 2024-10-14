import React from "react";
import { CheckCircleIcon, Linkedin } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function LinkedInPostsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 flex items-center mt-16">
          <Linkedin className="w-10 h-10 mr-3 text-blue-500" />
          Creating Engaging LinkedIn Posts
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Using Our Project</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Navigate to the Dashboard</li>
              <li>Select LinkedIn post generator</li>
              <li>Enter your post topic or theme</li>
              <li>Specify your target audience and post objective</li>
              <li>Click "Generate Post"</li>
              <li>Review, Share the generated content to LinkedIn</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            Tips for Crafting Engaging LinkedIn Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Know Your Audience: Tailor content to your professional network.",
              "Use Rich Media: Include images, videos, or infographics to boost engagement.",
              "Write Compelling Headlines: Grab attention with strong opening lines.",
              "Share Valuable Insights: Offer professional tips, industry trends, or thought leadership.",
              "Use Hashtags Strategically: Include relevant industry and topic hashtags.",
              "Encourage Discussion: Ask questions or invite opinions to boost comments.",
              "Keep it Professional: Maintain a balance between personal and professional content.",
              "Timing Matters: Post during peak business hours for maximum visibility.",
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
          Remember, authenticity and professionalism are key on LinkedIn. Use our tool for inspiration, but always ensure your posts reflect your professional brand and expertise!
        </p>
      </main>
    </div>
  );
}
