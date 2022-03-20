import React from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useContext } from "react";
import spinner from "../layout/assets/spinner.gif";
import { useQuery } from "react-query";

function PokemonStats() {
  const { pokename, fetchPokemonName } = useContext(PokedexContext);

  const { isLoading, data, isError, error } = useQuery(pokename, () =>{ return fetchPokemonName(pokename)});

  if(isError){
    console.log(error);
  }

  if (!isLoading) {
    return (
      <div className="absolute position-stats overflow-y-scroll h-60">
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon ID: {data.data.id} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Type: {data.data.types[0].type.name} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon HP: {data.data.stats[0].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Attack: {data.data.stats[1].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Defense: {data.data.stats[2].base_stat} </p>
        <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Speed: {data.data.stats[5].base_stat} </p>
        <img src={data.data.sprites.front_default} className="w-4/6 place-self-center " />
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
