import React, { useContext } from "react";
import spinner from "../layout/assets/spinner.gif";
import { PokeContextType } from "../../lib/interfaces/interfaces";
import PokedexContext from "../../context/pokedex/PokedexContext";

const PokemonStats: React.FC = React.memo(() => {
  const { response, stats } = useContext(PokedexContext) as PokeContextType;

  let pokemon_;

  console.log("PokemonStats Rendered");

  if (!stats.isLoading || !response.isLoading) {
    if (!stats.data)
      return (
        <div className="absolute position-stats overflow-y-scroll h-60 text-xs sm:text-xs md:text-base lg:text-base">
          Something went wrong While loading, please click again
        </div>
      );

    pokemon_ = stats.data.data;
    return (
      <div className="absolute position-stats overflow-y-scroll h-60 text-xs sm:text-xs md:text-base lg:text-base">
        <p className="mb-1 lg:mb-0">Pokemon Name: {pokemon_.name} </p>
        <p className="mb-1 lg:mb-0 ">Pokemon ID: {pokemon_.id} </p>
        <p className="mb-1 lg:mb-0">Pokemon Type: {pokemon_.types[0].type.name} </p>
        <p className="mb-1 lg:mb-0">Pokemon HP: {pokemon_.stats[0].base_stat} </p>
        <p className="mb-1 lg:mb-0">Pokemon Attack: {pokemon_.stats[1].base_stat} </p>
        <p className="mb-1 lg:mb-0">Pokemon Defense: {pokemon_.stats[2].base_stat} </p>
        <p className="mb-1 lg:mb-0">Pokemon Speed: {pokemon_.stats[5].base_stat} </p>
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
