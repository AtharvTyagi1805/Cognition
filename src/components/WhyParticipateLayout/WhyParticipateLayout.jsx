import WhyParticipateCardLayout from "../WhyParticipateLayout/WhyParticipateCardLayout";

const WhyParticipateLayout = () => {
  const whyParticipateCardContent = [
    {
      image: "../Images/Development.svg",
      content: "Participate",
      backgroundClr: "bg-gradient-to-b from-red-100 to-red-200",
    },
    {
      image: "../Images/Development.svg",
      content: "Participate",
      backgroundClr: "bg-gradient-to-b from-red-200 to-red-300",
    },
    {
      image: "../Images/Development.svg",
      content: "Participate",
      backgroundClr: "bg-gradient-to-b from-red-300 to-red-400",
    },
    {
      image: "../Images/Development.svg",
      content: "Participate",
      backgroundClr: "bg-gradient-to-b from-red-400 to-red-500",
    },
    {
      image: "../Images/Development.svg",
      content: "Participate",
      backgroundClr: "bg-gradient-to-b from-red-500 to-red-600",
    },
    {
      image: "../Images/Development.svg",
      content: "Participate",
      backgroundClr: "bg-gradient-to-b from-red-500 to-red-800",
    },
  ];

  return (
    <div className="w-full h-screen pt-14 flex justify-center items-center flex-col">
      <p className="text-white text-5xl font-bold font-mono">
        WHY PARTICIPATE IN
      </p>
      <p className="font-bold bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text  text-7xl font-mono">
        HACKATHON
      </p>
      <div className="w-3/4 flex justify-between items-center flex-wrap">
        {whyParticipateCardContent.map((item, index) => {
          return <WhyParticipateCardLayout key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default WhyParticipateLayout;
