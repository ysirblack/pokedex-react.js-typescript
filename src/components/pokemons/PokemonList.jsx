import React from "react";
import { useEffect, useContext } from "react";
import PokemonItem from "./PokemonItem";
import { v4 as uuidv4 } from "uuid";
import PokedexContext from "../../context/pokedex/PokedexContext";

function PokemonList({names}) {

  const { pokemonNames } = useContext(PokedexContext);
  let number = 0;

  return (
      <div>
        {names && names.map((name) => (
          <PokemonItem key={uuidv4()} name={name.name} number={++number} />
        ))}
      </div>
  );
}

export default PokemonList;
