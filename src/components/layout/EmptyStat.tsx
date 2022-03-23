import React from "react";
import { SiPokemon } from "react-icons/si";

const EmptyStat: React.FC = () => {
  return (
    <div className="absolute position-stats overflow-y-scroll h-60 ">
      <SiPokemon className="text-7xl sm:text-8xl md:text-8xl  lg:text-8xl" />
      <p className="text-xs sm:text-sm md:text-base lg:text-base ">To see a pokemon stats please click one of a pokemon name on the left side</p>
    </div>
  );
};

export default EmptyStat;
