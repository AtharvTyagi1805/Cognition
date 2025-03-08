import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Footer({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const sponsorData = [
    {
      image: "/logo1.png",
      title: "Title Sponsor",
      description: "We proudly welcome our Title Sponsor for Cognition.",
    },
    {
      image: "/logo1.png",
      title: "Power Sponsor",
      description: "We proudly welcome our Power Sponsor for Cognition.",
    },
    {
      image: "/logo1.png",
      title: "Platinum Sponsor",
      description: "We proudly welcome our Platinum Sponsor for Cognition.",
    },
    {
      image: "/logo1.png",
      title: "Gold Sponsor",
      description: "Thank you to our Gold Sponsor for supporting this event!",
    },
    {
      image: "/logo1.png",
      title: "Silver Sponsor",
      description: "Meet our Silver Sponsor helping us make this happen.",
    },
  ];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sponsorData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? sponsorData.length - 1 : prev - 1));
  };

  return (
    <footer className="bg-[#0f0f0f] relative z-20 text-white flex flex-col text-center items-center justify-center px-4 py-10">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-[80%] max-w-4xl bg-gradient-to-r from-yellow-400 to-yellow-700 py-4 px-6 rounded-xl shadow-lg text-black text-center">
        <h2 className="text-lg font-thin font-poppins md:text-5xl">
          CHASE IT UNTIL YOU ACE IT
        </h2>
        <button
          className="mt-2 font-poppins bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          onClick={() => setIsOpen(true)}
        >
          Our Sponsor →
        </button>
      </div>

      <img src="./logo1.png" alt="Ace" className="h-16 mt-16" />
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <a
          href="https://www.theace.tech/"
          className="font-bold font-mont hover:text-yellow-300 transition"
        >
          HOME
        </a>
        <button
          className="font-bold font-mont hover:text-yellow-300 transition"
          onClick={() => scrollToSection("about")}
        >
          ABOUT
        </button>
        <a
          href="/"
          className="font-bold font-mont hover:text-yellow-300 transition"
        >
          EVENT
        </a>
        <button
          className="font-bold font-mont hover:text-yellow-300 transition"
          onClick={() => scrollToSection("contact")}
        >
          CONTACT
        </button>
        <a
          href="https://www.commudle.com/admin/communities/the-ace/event-dashboard/cognition-season-1"
          className="font-bold font-mont hover:text-yellow-300 transition"
        >
          JOIN US
        </a>
      </div>

      <div className="flex gap-4 mt-4">
        <a href="/" className="hover:text-yellow-300 transition">
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/company/theacetech/"
          className="hover:text-yellow-300 transition"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
        </a>
        <a
          href="https://www.instagram.com/theacetech"
          className="hover:text-yellow-300 transition"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
      </div>

      <p className="text-center font-poppins text-sm text-white/50 mt-4">
        © 2025 ACE. All Rights Reserved.
      </p>

      <AnimatePresence custom={direction}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              className="relative bg-white p-8 rounded-lg w-3/4 max-w-lg text-center flex flex-col items-center"
            >
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              <img
                src={sponsorData[currentIndex].image}
                alt="Sponsor"
                className="h-24 mb-4"
              />

              <h2 className="text-xl text-black font-bold">
                {sponsorData[currentIndex].title}
              </h2>

              <p className="mt-2 text-gray-600">
                {sponsorData[currentIndex].description}
              </p>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-black"
              >
                <ChevronRight size={40} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
