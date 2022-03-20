import React from "react";
import { SiPokemon } from "react-icons/si";

function EmptyStat() {
  return (
    <div className="absolute position-stats overflow-y-scroll h-60">
        <SiPokemon className="text-8xl" />
        <p>To see a pokemon stats please click one of a pokemon name on the left side</p>
    </div>
  );
}

export default EmptyStat;
