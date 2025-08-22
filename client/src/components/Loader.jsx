import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0D0D0D] text-white">
      {/* Spinning + Pulsing Loader Circle */}
      <motion.div
        className="relative w-20 h-20 mb-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-gray-700 animate-spin"></div>
      </motion.div>

      {/* Animated Typing Effect Text */}
      <motion.h2
        className="text-xl font-semibold tracking-wide text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.span
          className="text-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
        >
          Powered by Thinkstent AI
        </motion.span>
      </motion.h2>
    </div>
  );
}
