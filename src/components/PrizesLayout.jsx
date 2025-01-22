import { GiDiamondTrophy } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";

const PrizesLayout = () => {
  return (
    <div className="w-full h-screen pt-14 flex justify-center items-center flex-col">
      <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 text-6xl font-mono mb-6">
        PRIZES
      </p>
      <div className="w-[80%] h-[80%] flex">
        <div className="w-[60%] h-full border-4 border-white">
          <div className="w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] m-5 bg-gray-400 rounded-xl flex justify-evenly items-center flex-col">
            <GiDiamondTrophy className="text-[15rem]" />
            <p className="w-3/4  text-center">Lorem, ipsum dolor si</p>
            <p className="w-3/4  text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
              sit repellendus
            </p>
            <p className="w-3/4  text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
              sit repellendus cum quam et expedita odio dolorum ratione,
              voluptatibus est fugiat
            </p>
          </div>
        </div>
        <div className="w-[40%] flex flex-col border-4 border-white border-l-0">
          <div className="w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] m-5 bg-gray-400 rounded-xl flex justify-evenly items-center flex-col">
            <FaAward className="text-8xl" />
            <p className="w-3/4  text-center">Lorem, ipsum dolor si</p>
            <p className="w-3/4  text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
              sit repellendus
            </p>
          </div>
          <div className="w-full h-2 bg-white"></div>
          <div className="w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] m-5 bg-gray-400 rounded-xl flex justify-evenly items-center flex-col">
            <PiCertificateBold className="text-8xl" />
            <p className="w-3/4  text-center">Lorem, ipsum dolor si</p>
            <p className="w-3/4  text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
              sit repellendus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesLayout;
