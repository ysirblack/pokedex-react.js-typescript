import React from "react";
import spinner from "../layout/assets/spinner.gif";
import {PokemonStatsProps} from "../../lib/interfaces/interfaces"


const PokemonStats: React.FC<PokemonStatsProps> = React.memo(({ pokemon }) => {
  let pokemon_;

  console.log("PokemonStats Rendered");

  if (pokemon.status === "success") {
    pokemon_ = pokemon.data.data;
    return (
      <div className="absolute position-stats overflow-y-scroll h-60">
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon ID: {pokemon_.id} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Type: {pokemon_.types[0].type.name} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon HP: {pokemon_.stats[0].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Attack: {pokemon_.stats[1].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Defense: {pokemon_.stats[2].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Speed: {pokemon_.stats[5].base_stat} </p>
        <img src={pokemon_.sprites.front_default} className="w-4/6 place-self-center" alt="Pokeimage" />
      </div>
    );
  } else {
    console.log("loading...");
    return (
      <div className="absolute position-stats overflow-y-scroll h-60 ">
        <img width={75} src={spinner} className="text-center mx-auto mt-24" alt="Loading..." />
      </div>
    );
  }
});

export default PokemonStats;
