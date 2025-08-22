import { Link } from "react-router-dom";
import { 
  FaXTwitter
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#0D0D0D] text-white px-6 py-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link to="/resources" className="hover:text-gray-400 transition">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/company" className="hover:text-gray-400 transition">
              Company
            </Link>
          </li>
          <li>
            <Link to="/legal" className="hover:text-gray-400 transition">
              Legal
            </Link>
          </li>
        </ul>

        {/* Right - Socials */}
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaXTwitter className="text-2xl" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaFacebookSquare  className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <IoLogoInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
