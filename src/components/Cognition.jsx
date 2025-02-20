import { motion } from "framer-motion";

export default function CognitionHero() {
  const frames = [
    { top: "10%", left: "15%", rotate: "-10deg", text: "Thinking & Knowing" },
    { top: "30%", left: "5%", rotate: "0deg", text: "Problem-Solving" },
    { top: "45%", left: "77%", rotate: "15deg", text: "Mental Processes" },
    { top: "65%", left: "30%", rotate: "-5deg", text: "Understanding" }, // Moved up
    { top: "60%", left: "65%", rotate: "10deg", text: "Memory" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
      {frames.map((frame, index) => (
        <motion.div
          key={index}
          className="absolute w-40 h-40 md:w-56 md:h-56 rounded-2xl border-8 border-white bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-transparent font-semibold text-lg md:text-xl"
          style={{
            top: frame.top,
            left: frame.left,
            transform: `rotate(${frame.rotate})`,
          }}
          whileHover={{
            scale: 1.05,
            rotate: frame.rotate === "0deg" ? 5 : frame.rotate,
            color: "white",
          }}
          transition={{ duration: 0.3 }}
        >
          {frame.text}
        </motion.div>
      ))}

      {/* Text and Buttons */}
      <div className="relative flex flex-col items-center space-y-4">
        <motion.h1
          className="text-5xl md:text-7xl font-poppins font-thin text-white"
          whileHover={{ scale: 1.1, letterSpacing: "2px" }}
          transition={{ duration: 0.3 }}
        >
          COGNITION
        </motion.h1>
        <div className="flex space-x-4">
          <button className="mt-8 inline-block bg-white text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 hover:text-white px-3 py-1 rounded-lg text-sm md:text-lg font-bold transition-colors duration-500 hover:shadow-lg">
            Register Now
          </button>
          <button className="mt-8 inline-block bg-white text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 hover:text-white px-3 py-1 rounded-lg text-sm md:text-lg font-bold transition-colors duration-500 hover:shadow-lg">
            Sponsor Us
          </button>
        </div>
      </div>
    </div>
  );
}
