import React, { useEffect, useContext } from "react";
import Spinner from "../components/layout/Spinner";
import PokedexContext from "../context/pokedex/PokedexContext";
import PokemonList from "../components/pokemons/PokemonList";
import PokemonStats from "../components/pokemons/PokemonStats";
function Home() {
  const { count, loading, pokemon_ , fetchPokemons } = useContext(PokedexContext);

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
          <div className="absolute position-names overflow-y-scroll h-60">
            <PokemonList />
          </div>
          {pokemon_.id > 0 && <PokemonStats pokemon = {pokemon_} />}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Home;
