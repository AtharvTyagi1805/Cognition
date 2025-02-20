import React, { useState } from "react";

const items = [
  {
    name: "Cognition",
    content:
      "Cognition is the driving force behind our quest for knowledge and understanding, encompassing the mental processes involved in thinking, knowing, remembering, and problem-solving.",
  },
  {
    name: "Date",
    content: "To be revealed..........",
  },
  {
    name: "Venue",
    content: "To be revealed..........",
  },
  {
    name: "Sponsor Benefits",
    content:
      "Promote your product to upcoming developers, tech professionals, companies, and community members, Foster your brand with advertisements in 100+ colleges in Indio and many more. Apart fr om trad itional recruitment,sponsorship con find you some diligent and soaring minds os your employees, [RECRUIT TALENTS) ",
  },
];

const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      <section className="mt-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">TIMELINE</h2>
        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap w-full md:w-[440px] bg-yellow-600 rounded-lg shadow-lg overflow-hidden">
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
    </div>
  );
};

export default Widget;
