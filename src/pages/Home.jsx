import React, { useEffect, useContext } from "react";
import Spinner from "../components/layout/Spinner";
import PokemonItem from "../components/pokemons/PokemonItem";
import PokedexContext from "../context/pokedex/PokedexContext";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const { count, loading, pokemons, fetchPokemons } = useContext(PokedexContext);

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (!loading) {
    return (
      <div>
        <h1 className="text-3xl mb-3">
          {" "}
          Search for a Pokemon among number of <span className="text-red-500">{count}!</span>
        </h1>
        <div className="grid grid-cols-2 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {pokemons.map((pokemon) => (
            <PokemonItem key={uuidv4()} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Home;
