"use client";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("workout"); // workout or diet

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <main className={`min-h-screen bg-black text-white ${inter.className}`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-xl font-bold">
          <span className="text-white">Fit</span>
          <span className="text-purple-500">Buddy</span>
        </div>
        <div className="flex gap-4">
          <a href="mailto:rahulkumaresan74@gmail.com" className="text-gray-300 hover:text-white">Contact Us</a>
          <a href="https://github.com/rahulkumaresan" className="text-gray-300 hover:text-white">GitHub</a>
        </div>
      </nav>

      {/* Info Banner */}
      <div className="bg-gray-800/50 py-3 px-6">
        <div className="flex items-center justify-center gap-2">
          <span className="bg-purple-500 text-white text-sm px-2 py-1 rounded">INFO</span>
          <p className="text-gray-200">We are launching soon. Stay tuned and be there 🚀🌍</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-20 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section - Waitlist Form */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-6">
            FitBuddy
          </h1>
          <p className="text-gray-300 text-xl mb-8">
          Your Smartest Fitness Partner, Every Step of the Way!
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <p className="text-gray-400 text-sm mt-2 mb-4">
              FitBuddy is launching soon, join the waitlist and get exciting perks when we launch
            </p>
            
            <button
              type="submit"
              className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Join Waitlist
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Section - AI Fitness App Preview */}
        <div className="relative">
            <div className="bg-black rounded-3xl overflow-hidden shadow-xl max-w-[320px] w-full">
              {/* Date Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>18/2/2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-500 px-2 py-1 rounded-full text-xs">AI Active</div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-800">
                <button
                  onClick={() => setActiveTab("workout")}
                  className={`flex-1 py-3 text-center ${activeTab === "workout" ? "text-green-500 border-b-2 border-green-500" : "text-gray-400"}`}
                >
                  Workout
                </button>
                <button
                  onClick={() => setActiveTab("diet")}
                  className={`flex-1 py-3 text-center ${activeTab === "diet" ? "text-green-500 border-b-2 border-green-500" : "text-gray-400"}`}
                >
                  Diet
                </button>
              </div>

              {activeTab === "workout" ? (
                /* Workout Tab Content */
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Today's Progress</h2>
                    <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm">
                      🎯 85% Complete
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-purple-500/10 p-3 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-purple-500">AI Insight</span>
                    </div>
                    <p className="text-sm text-gray-300">You're performing better in morning workouts. Schedule your next HIIT session before 10 AM for optimal results.</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <div className="text-sm text-blue-200">Steps</div>
                      <div className="text-xl font-bold">8,432</div>
                      <div className="text-xs text-blue-200">Goal: 10,000</div>
                    </div>
                    <div className="bg-green-600 p-3 rounded-lg">
                      <div className="text-sm text-green-200">Calories</div>
                      <div className="text-xl font-bold">470</div>
                      <div className="text-xs text-green-200">Goal: 500</div>
                    </div>
                  </div>

                  {/* Next Workout */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Next: HIIT Session</h3>
                      <span className="text-xs text-gray-400">25 min</span>
                    </div>
                    <div className="text-sm text-gray-400">AI-optimized for your fitness level</div>
                  </div>
                </div>
              ) : (
                /* Diet Tab Content */
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Nutrition Today</h2>
                    <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm">
                      🥗 On Track
                    </div>
                  </div>

                  {/* AI Nutrition Insights */}
                  <div className="bg-purple-500/10 p-3 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-purple-500">AI Recommendation</span>
                    </div>
                    <p className="text-sm text-gray-300">Consider adding more protein to your next meal to support your muscle recovery after this morning's workout.</p>
                  </div>

                  {/* Macro Progress */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Protein</span>
                        <span>120g/150g</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Carbs</span>
                        <span>200g/250g</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fats</span>
                        <span>45g/60g</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-yellow-500 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Next Meal Suggestion */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Suggested Dinner</h3>
                      <span className="text-xs bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full">AI Generated</span>
                    </div>
                    <p className="text-sm text-gray-400">Grilled chicken breast with quinoa and roasted vegetables (450 cal)</p>
                  </div>
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="flex justify-around items-center px-6 py-4 bg-gray-900 border-t border-gray-800">
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </button>
                <button className="bg-green-500 p-3 rounded-full -mt-8">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}