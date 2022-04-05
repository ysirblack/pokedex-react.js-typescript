import React from "react";
import PokemonItem from "./PokemonItem";
import { v4 as uuidv4 } from "uuid";
import { PokemonListProps } from "../../lib/interfaces/interfaces";

const PokemonList: React.FC<PokemonListProps> = React.memo(({ names }) => {
  let number = 0;
  console.log("PokemonList Rendered");
  return <div>{names && names.map((name) => <PokemonItem key={uuidv4()} name={name.name} number={++number} />)}</div>;
});

PokemonList.defaultProps = {
  names: [{ name: "loading.." }],
};

export default PokemonList;
