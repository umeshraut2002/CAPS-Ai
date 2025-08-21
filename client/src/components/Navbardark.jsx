import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Navbardark() {
  return (
    <nav className="bg-[#0D0D0D] text-white px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-xl font-bold cursor-pointer">
          Logo
        </div>

        {/* Right - Search + Button + Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 w-40"
          />

          {/* Get Started Button with Icon */}
          <button className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 text-white px-4 py-1.5 rounded-lg text-sm">
            Get Started
            <FiArrowRight className="text-lg" />
          </button>

          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
          />
        </div>
      </div>
    </nav>
  );
}
