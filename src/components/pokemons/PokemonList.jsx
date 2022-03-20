import React from "react";
import { useEffect, useContext } from "react";
import PokemonItem from "./PokemonItem";
import { v4 as uuidv4 } from "uuid";
import PokedexContext from "../../context/pokedex/PokedexContext";

function PokemonList() {

  const { pokemonNames,fetchPokemonNames } = useContext(PokedexContext);
  let number = 0;
  
  return (
      <div>
        {pokemonNames.map((pokemon) => (
          <PokemonItem key={uuidv4()} name={pokemon.name} number={++number} />
        ))}
      </div>
  );
}

export default PokemonList;
