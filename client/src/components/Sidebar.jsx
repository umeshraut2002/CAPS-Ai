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
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bg-[#121212] text-gray-200 border-r border-gray-700 flex flex-col justify-between transition-all duration-300 
        ${isOpen ? "w-64" : "w-0"} 
        h-[calc(100vh-60px)] mt-[60px]`}
      >
        {/* Scrollable content inside */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
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
        </div>

        {/* Bottom - Pricing (fixed inside sidebar) */}
        <div className="p-6 border-t border-gray-700">
          <a
            href="#"
            className="mb-10 flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
          >
            <FiDollarSign /> <span>Pricing</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
