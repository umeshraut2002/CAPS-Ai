import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0D0D0D] text-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between item-center">
          <div className="gap-3 teext-xl font-bold cursor-pointer decoration-none text-center">
            <li>
              <a href="">Resources</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Legal</a>
            </li>
          </div>
          <div>
            <FaSquareXTwitter className="text-xl" />
          </div>
        </div>
      </footer>
    </>
  );
}
