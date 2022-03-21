import React from "react";
import spinner from "../layout/assets/spinner.gif";

function PokemonStats({pokemon, isLoading}) {
  
  if (!isLoading) {
    return (
      <div className="absolute position-stats overflow-y-scroll h-60">
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon ID: {pokemon.id} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Type: {pokemon.types[0].type.name} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon HP: {pokemon.stats[0].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Attack: {pokemon.stats[1].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Defense: {pokemon.stats[2].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Speed: {pokemon.stats[5].base_stat} </p>
        <img src={pokemon.sprites.front_default} className="w-4/6 place-self-center " />
      </div>
    );
  } else {
    return (
      <div className="absolute position-stats overflow-y-scroll h-60">
        <img width={50} src={spinner} className="text-center mx-auto mt-24" alt="Loading..." />
      </div>
    );
  }
}

export default PokemonStats;
