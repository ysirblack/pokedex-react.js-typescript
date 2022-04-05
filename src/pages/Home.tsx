import React, { useContext } from "react";
import Spinner from "../components/layout/Spinner";
import PokedexContext from "../context/pokedex/PokedexContext";
import PokemonList from "../components/pokemons/PokemonList";
import PokemonStats from "../components/pokemons/PokemonStats";
import EmptyStat from "../components/layout/EmptyStat";
import { useQuery } from "react-query";
import { PokeContextType } from "../lib/interfaces/interfaces";
import { IQuery } from "../lib/interfaces/interfaces";
import pokedexImage from "../components/layout/images/pokedex.png";

const Home = React.memo(() => {
  const { fetchPokemons, firstClicked } = useContext(PokedexContext) as PokeContextType;

  const { isLoading, data } = useQuery("names", fetchPokemons) as IQuery;

  if (!isLoading) {
    return (
      <div>
        <h1 className="lg:text-3xl md:text-2xl sm:text-2xl">
          Search from <span className="text-red-500">{data.data.count}</span> Pokemon!
        </h1>
        <div className="relative">
          <img src={pokedexImage} alt="pokedex" />
          <div className="absolute position-names overflow-y-scroll h-60">{<PokemonList names={data.data.results} />}</div>
          {firstClicked ? <PokemonStats /> : <EmptyStat />}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
});

export default Home;
