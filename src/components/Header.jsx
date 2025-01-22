import React, { useState, useEffect } from "react";
import logo from "../assets/wow.png";
import backgroundImage from "../assets/bg.png";
import imagess1 from "../assets/wowhat1.png";
import imagess2 from "../assets/wowhat2.png";
import imagess3 from "../assets/wowhat3.png";
import imagess4 from "../assets/wowhat4.png";
import PrizesLayout from "./PrizesLayout";
import SponsorLayout from "./SponsorLayout";
import WhyParticipateLayout from "./WhyParticipateLayout/WhyParticipateLayout";

const images = [imagess1, imagess2, imagess3, imagess4];

const items = [
  {
    name: "Time Registration",
    content:
      "12 to 14 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
  {
    name: "Day 1",
    content:
      "24 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
  {
    name: "Day 2",
    content:
      "25 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
  {
    name: "Day 3 & result",
    content:
      "25 APRIL, Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
];

const Header = () => {
  //   widget
  const [activeBlock, setActiveBlock] = useState(0);
  const toggleMenuBlock = (index) => setActiveBlock(index);

  //   wowhat animation
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  //   snowfall animation
  useEffect(() => {
    createSnowflakes();
  }, []);

  const createSnowflakes = () => {
    const container = document.querySelector(".snow-container");
    const numSnowflakes = 50;

    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      snowflake.style.left = Math.random() * 100 + "%";
      snowflake.style.animationDuration = Math.random() * 5 + 10 + "s";
      snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
      snowflake.style.opacity = Math.random() * 0.5 + 0.5;
      snowflake.style.animationDelay = Math.random() * 5 + "s";

      snowflake.innerHTML = "❄";
      container.appendChild(snowflake);
    }
  };

  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      {/* header */}
      <header className="flex flex-wrap justify-between items-center relative z-10">
        <img src={logo} alt="Logo" className="h-12 mb-4 md:mb-0" />
        <nav className="flex flex-wrap space-x-4 md:space-x-8">
          <a href="#home" className="hover:text-red-500 text-sm sm:text-base">
            Home
          </a>
          <a href="#about" className="hover:text-red-500 text-sm sm:text-base">
            About
          </a>
          <a href="#event" className="hover:text-red-500 text-sm sm:text-base">
            Event
          </a>
          <a
            href="#contact"
            className="hover:text-red-500 text-sm sm:text-base"
          >
            Contact
          </a>
          <button className="bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 rounded-full transition-colors duration-500 hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:text-black font-bold text-sm sm:text-base">
            Join Us
          </button>
        </nav>
      </header>

      <main className="mt-16 relative z-10">
        <section className="text-center px-4">
          {/* text-animation */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text animate-gradient"
            style={{ wordSpacing: "1rem" }}
          >
            DISCOVER DESIGN DEVELOP
          </h1>
          {/* banner left half and right half */}
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* left half */}
            <div className="flex flex-wrap h-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center pl-4 pr-4 md:pl-12 md:pr-6 text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold">
                  HACKATHON NAME
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
                <button className="mt-8 inline-block bg-white text-red-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-800 hover:text-white px-3 py-1 rounded-lg text-sm md:text-lg font-bold transition-colors duration-500 hover:shadow-lg">
                  Register Now
                </button>
              </div>

              {/* right half */}
              <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                <img
                  src={images[currentImage]}
                  alt={`Image ${currentImage + 1}`}
                  className="object-contain w-1/2 h-auto max-w-sm md:max-w-full transition-opacity duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </section>
        {/* widget */}
        <section className="mt-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            TIMELINE
          </h2>
          <div className="flex justify-center mt-12">
            <div className="flex flex-wrap w-full md:w-[440px] bg-red-600 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full md:w-[150px] bg-[#dadada] text-sm font-medium pt-5">
                {items.map((item, index) => (
                  <button
                    key={item.name}
                    className={`w-full text-left px-4 py-3 cursor-pointer transition-colors duration-300 ${
                      index === activeBlock
                        ? "bg-[#464444] transition-colors duration-500 text-white font-bold rounded-md"
                        : "hover:bg-gray-300 transition-colors duration-500 hover:text-black hover:font-bold text-black hover:rounded-md"
                    }`}
                    onClick={() => setActiveBlock(index)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="flex-1 p-5">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {items[activeBlock].name}
                </h2>
                <p className="text-white text-sm md:text-lg">
                  {items[activeBlock].content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhyParticipateLayout />
      <PrizesLayout />
      <SponsorLayout />
    </div>
  );
};

export default Header;
