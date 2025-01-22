import { SiMcdonalds } from "react-icons/si";

const SponsorLayout = () => {
  const sponserData = [
    {
      image: <SiMcdonalds className="text-6xl" />,
      name: "Mc Donalds",
    },
    {
      image: <SiMcdonalds className="text-6xl" />,
      name: "Mc Donalds",
    },
    {
      image: <SiMcdonalds className="text-6xl" />,
      name: "Mc Donalds",
    },
    {
      image: <SiMcdonalds className="text-6xl" />,
      name: "Mc Donalds",
    },
  ];
  return (
    <div>
      <div className="w-fit mt-20 py-14 flex justify-center items-center flex-col bg-gradient-to-r from-red-600 to-red-800">
        <p className="text-white text-6xl font-mono">Sponsors</p>
        <p className="w-3/4 text-white text-center font-mono my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          temporibus voluptates hic distinctio ipsam nulla dolores magnam et
          nemo minima repudiandae tempora, quae consectetur? Adipisci assumenda
          dicta vel nostrum non.
        </p>
        <div className="w-[80%] flex justify-evenly items-center">
          {sponserData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[22%] my-4 text-2xl flex justify-evenly items-center"
              >
                {item.image}
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SponsorLayout;
