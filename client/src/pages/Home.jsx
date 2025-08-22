import {Link} from "react-router-dom"

export default function Home() {
  const score = 85;

  return (
    <main className="ml-64 bg-[#0D0D0D] min-h-screen text-white p-6">
      {/* Greeting */}
      <h1 className="text-2xl font-semibold mb-6">
        Welcome, Alex <span className="ml-1">👋</span>
      </h1>

      {/* Grid of Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upload Resume */}
        <div className="bg-[#1A1A1A] rounded-xl shadow p-6 flex flex-col justify-center items-center">
          <div className="text-4xl mb-3">☁️</div>
          <h2 className="text-lg font-medium mb-2">Upload Your Resume</h2>
          <p className="text-sm text-gray-400 mb-4 text-center">
            Drag and drop your resume here, or click to browse.
          </p>
          <button className="bg-[#2563EB] px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition">
            Upload Resume
          </button>
        </div>

        {/* Latest Analysis Snapshot */}
        <div className="bg-[#1A1A1A] rounded-xl shadow p-6 flex flex-col">
          <h2 className="text-lg font-medium mb-2">Latest Analysis Snapshot</h2>
          <p className="text-sm text-gray-400">Last updated: October 26, 2023</p>
          <div className="flex items-center mt-4">
            <span className="text-4xl font-bold text-green-500">{score}%</span>
            <span className="ml-2 text-green-500 text-xl">✔</span>
          </div>
          <p className="mt-2 text-gray-300 text-sm">
            Strong in Data Science, needs improvement in Project Management.
          </p>
          <button className="mt-auto bg-[#2563EB] px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition self-start">
            View Full Insights
          </button>
        </div>

        {/* Career Readiness Score */}
        <div className="bg-[#1A1A1A] rounded-xl shadow p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium mb-4">Career Readiness Score</h2>
          {/* Circle Chart Placeholder */}
          <div className="w-40 h-40 rounded-full border-8 border-blue-500 border-t-green-500"></div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Your Plan */}
        <div className="bg-[#1A1A1A] rounded-xl shadow p-6">
          <h2 className="text-lg font-medium mb-2">Your Plan</h2>
          <span className="text-sm bg-gray-700 px-2 py-1 rounded-md">
            Free Plan
          </span>
          <p className="text-sm text-gray-400 mt-3">
            Upload up to 3 resumes/month and get basic analysis.
          </p>
          <button className="mt-4 bg-[#2563EB] px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </main>
  );
}
