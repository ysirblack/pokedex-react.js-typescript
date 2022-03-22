import { useContext } from "react";
import Spinner from "../components/layout/Spinner";
import PokedexContext from "../context/pokedex/PokedexContext";
import PokemonList from "../components/pokemons/PokemonList";
import PokemonStats from "../components/pokemons/PokemonStats";
import EmptyStat from "../components/layout/EmptyStat";
import { useQuery } from "react-query";
import {PokeContextType} from "../lib/interfaces/interfaces";
import {IPokemon } from "../lib/interfaces/interfaces";
import {IQuery } from "../lib/interfaces/interfaces";


function Home() {
  const { fetchPokemons, pokename, hovered, fetchPokemonName, clicked } = useContext(PokedexContext) as PokeContextType;

  const { isLoading, data, isError, error } = useQuery("names", fetchPokemons) as IQuery;

  let response = useQuery(
    pokename,
    () => {
      console.log("Pokemon Stats fetching")
      return fetchPokemonName(pokename);
    },
    { enabled: hovered }
  ) as IPokemon;

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
            {<PokemonList names={data.data.results} />}
          </div>
          {clicked ? <PokemonStats pokemon={response} /> : <EmptyStat />}
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Home;
