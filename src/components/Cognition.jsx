import { motion } from "framer-motion";
import Words from "./Words";

export default function Cognition() {
  const frames = [
    { top: "30%", left: "5%", rotate: "15deg", text: "EPISODE 2" },
    { top: "45%", left: "75%", rotate: "15deg", text: "EPISODE 3" },
    { top: "65%", left: "30%", rotate: "-5deg", text: "To Be Revealed...." },
    { top: "60%", left: "65%", rotate: "10deg", text: "EPISODE 4" },
    { top: "10%", left: "15%", rotate: "-10deg", text: "IDEATION" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* <style>
        {`
          @media (max-width: 1024px) {
            div[style] { background-size: 75% !important; }
          }
          @media (max-width: 768px) {
            div[style] { background-size: cover !important; }
          }
        `}
      </style> */}
      {frames.map((frame, index) => (
        <motion.div
          key={index}
          className="absolute hidden w-40 h-40 md:w-56 md:h-56 rounded-2xl border-8 border-white bg-gradient-to-br from-yellow-400 to-yellow-600 md:flex items-center justify-center text-transparent font-semibold text-lg md:text-xl"
          style={{
            top: frame.top,
            left: frame.left,
          }}
          initial={{ rotate: frame.rotate }}
          animate={{ rotate: frame.rotate }}
          whileHover={{
            scale: 1.05,
            rotate: "0deg",
            color: "white",
          }}
          transition={{ duration: 0.3 }}
          onHoverEnd={() => {
            document.getElementById(
              `frame-${index}`
            ).style.transform = `rotate(${frame.rotate})`;
          }}
          id={`frame-${index}`}
        >
          {frame.text}
        </motion.div>
      ))}

      {/* Text and Buttons */}
      <div className="relative flex flex-col items-center justify-center space-y-4">
        <Words />
        <motion.div
          className="md:w-[750px] w-96"
          whileHover={{ scale: 1.1, letterSpacing: "2px" }}
          transition={{ duration: 0.3 }}
        >
          <img src="./cognition.png" alt="" />
        </motion.div>
        <div className="flex space-x-4">
          <a
            className="mt-6 inline-block bg-white text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 hover:text-white px-5 py-3 rounded-lg text-sm md:text-lg font-bold transition-colors duration-500 hover:shadow-lg"
            href="https://forms.gle/zTYsrLw2VwotBF367"
          >
            Call for Registration <br />
{/*             <span className="text-sm text-gray-600 text-center hover:text-black">
              (COMING SOON)
            </span> */}
          </a>

          <a
            className="mt-6 inline-block bg-white text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800 hover:text-white px-5 py-3 rounded-lg text-sm md:text-lg font-bold transition-colors duration-500 hover:shadow-lg"
            href="/cognition"
          >
            Call for Speaker <br />
            <span className="text-sm text-gray-600 text-center hover:text-black">
              (COMING SOON)
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
