import React from "react";
import { CheckCircleIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { TwitterIcon } from "@/components/icons/TwitterIcon";

export default function TwitterThreadsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 flex items-center mt-16">
          <TwitterIcon className="w-10 h-10 mr-3 text-blue-400" />
          Creating Effective X Threads
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Using Our Project</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Navigate to the Dashboard </li>
              <li>Select X thread generator</li>
              <li>Enter your main topic or idea</li>
              <li>Click "Generate Thread"</li>
              <li>Use the "Share" button to publish</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">
            Tips for Promoting Your Thread
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Clear Structure: Use numbers or emojis to guide readers through your thread.",
              "Hashtags: Use 1-2 relevant hashtags to increase discoverability.",
              "Engage with Responses: Reply to comments to foster discussion.",
              "Timing: Post when your audience is most active.",
              "Call-to-Action: End with a clear CTA (e.g., 'Follow for more', 'Share if you agree').",
              "Promote on Other Platforms: Share your thread link on other social media channels.",
              "Pinned Tweet: Pin your best threads to your profile for increased visibility.",
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
          Remember, quality content is key. Use our tool to generate ideas, but
          always add your personal touch!
        </p>
      </main>
    </div>
  );
}
