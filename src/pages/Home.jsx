import React, { useContext } from "react";
import Spinner from "../components/layout/Spinner";
import PokedexContext from "../context/pokedex/PokedexContext";
import PokemonList from "../components/pokemons/PokemonList";
import PokemonStats from "../components/pokemons/PokemonStats";
import EmptyStat from "../components/layout/EmptyStat";
import { useQuery } from "react-query";


function Home() {
  const { isStats, fetchPokemons } = useContext(PokedexContext);

  const { isLoading, data, isError, error } = useQuery("names", fetchPokemons);

  if(isError){
    console.log(error);
  }

  if (!isLoading) {
    return (
      <div>
        <h1 className="lg:text-3xl md:text-2xl sm:text-2xl">
          Search from <span className="text-red-500">{data.data.count}</span> Pokemon!
        </h1>
        <div className="relative">
          <img src="pokedex.png" />
          <div className="absolute position-names overflow-y-scroll h-60">
            <PokemonList names={data.data.results} />
          </div>
          {isStats ? <PokemonStats /> : <EmptyStat />}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Home;
