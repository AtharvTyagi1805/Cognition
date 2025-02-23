import React, { useState } from "react";

const items = [
  {
    name: "COGNITION",
    content:
      "Cognition is the driving force behind our quest for knowledge and understanding, encompassing the mental processes involved in thinking, knowing, remembering, and problem-solving. Our event,  is designed to ignite these cognitive processes through a series of 10 immersive tech events focused on cutting-edge technologies like Augmented Reality (AR), Virtual Reality (VR), Blockchain, Game Development, Artificial Intelligence (AI), and Machine Learning (ML). Spanning various locations across Delhi NCR, offers a unique platform for tech enthusiasts to network, learn, and gain hands-on experience, propelling them into the future of technology.",
  },
  {
    name: "DATE",
    content: "TO BE REVEALED",
  },
  {
    name: "VENUE",
    content: "TO BE REVEALED",
  },
  {
    name: "SPONSOR BENEFITS",
    content:
      "Promote your product to upcoming developers, tech professionals, companies, and community members. Foster your brand with advertisements in 100+ colleges in India and many more. Apart from traditional recruitment, sponsorship can help you find diligent and aspiring minds as your employees. Sponsorship opportunities, such as games, giveaways, and better reach, will help you connect with the crowd easily. Showcase your technology to the brightest young minds. You will be mentioned on our website, social media, promo videos, and invitation brochure, collectively reaching over 10,000 people, thereby building your brand awareness. Modes of Sponsorship Support in the Form of Awesome Goodies: Some Ideas: Refreshments for the participants, T-shirts, bags, bottles, stickers, notepads, hoodies, coffee mugs Monetary Support: Let's talk and decide on what would be the ideal price for your case ",
  },
];

const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  return (
    <div className="relative text-white min-h-screen overflow-hidden max-w-7xl mx-auto">
      <section className="mt-16 px-4">
        <h2 className="text-6xl md:text-9xl font-thin font-poppins text-center">
          TIMELINE
        </h2>
        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap max-w-7xl h-auto bg-yellow-600 rounded-lg shadow-lg overflow-hidden">
            <div className="w-full md:w-[250px] bg-[#dadada] text-sm font-medium pt-5">
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
