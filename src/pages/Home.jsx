import React, { useContext } from "react";
import Spinner from "../components/layout/Spinner";
import PokedexContext from "../context/pokedex/PokedexContext";
import PokemonList from "../components/pokemons/PokemonList";
import PokemonStats from "../components/pokemons/PokemonStats";
import EmptyStat from "../components/layout/EmptyStat";
import { useQuery } from "react-query";

function Home() {
  const { fetchPokemons, pokename, hovered, fetchPokemonName, clicked } =
    useContext(PokedexContext);

  const { isLoading, data, isError, error } = useQuery("names", fetchPokemons);

  const response = useQuery(
    pokename,
    () => {
     console.log(pokename);
      //setHovered(false);
      return fetchPokemonName(pokename);
    },
    { enabled: hovered }
  );

  // if(response.isError){
  //   console.log(response.error);
  // }

  // console.log(response);
  //console.log(response.data);

  if (isError) {
    console.log(error);
  }

  if (!isLoading) {
    return (
      <div>
        <h1 className="lg:text-3xl md:text-2xl sm:text-2xl">
          Search from <span className="text-red-500">{data.data.count}</span> Pokemon!
        </h1>
        <div className="relative">
          <img src="pokedex.png" alt="pokedex" />
          <div className="absolute position-names overflow-y-scroll h-60">
            <PokemonList names={data.data.results} />
          </div>
          {clicked ? <PokemonStats pokemon= {response.data.data} isLoading={response.isLoading} /> : <EmptyStat />}
       
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Home;

// {isStats ? <PokemonStats /> : <EmptyStat />}
