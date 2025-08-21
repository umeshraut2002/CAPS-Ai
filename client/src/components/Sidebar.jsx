import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUpload,
  FiBarChart2,
  FiBriefcase,
  FiClock,
  FiUser,
  FiDollarSign,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#121212] text-gray-200 h-screen flex flex-col justify-between transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        {/* Top - Features */}
        <div className="p-6">
          {/* <h1 className="text-xl font-bold mb-8">MyApp</h1> */}
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FiHome /> <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FiUpload /> <span>Resume Uploads</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FiBarChart2 /> <span>Insights</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FiBriefcase /> <span>Companies</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FiClock /> <span>History</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FiUser /> <span>Profile</span>
            </a>
          </nav>
        </div>

        {/* Bottom - Pricing */}
        <div className="p-6 border-t border-gray-700">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
          >
            <FiDollarSign /> <span>Pricing</span>
          </a>
        </div>
      </aside>
    </div>
  );
}

