import React, { useEffect, useContext } from "react";
import Spinner from "../components/layout/Spinner";
import PokedexContext from "../context/pokedex/PokedexContext";
import PokemonList from "../components/pokemons/PokemonList";

function Home() {
  const { count, loading, fetchPokemons } = useContext(PokedexContext);

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (!loading) {
    return (
      <div>
        <h1 className="text-3xl">
          Search for a Pokemon among number of <span className="text-red-500">{count}!</span>
        </h1>
        <div className="relative">
          <img src="pokedex.png" />
          <div className="absolute position overflow-y-scroll h-60">
            <PokemonList />
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Home;
