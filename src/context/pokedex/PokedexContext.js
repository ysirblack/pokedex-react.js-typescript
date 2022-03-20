import { createContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const PokedexContext = createContext();

const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API_URL;

export const PokedexProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemon_, setPokemon] = useState({});

  const [isStats, setIsStats] = useState(false);
  const [pokename, setPokeName] = useState("");

  const fetchPokemons = async () => {
    try {
      // const response = await fetch(`${POKEMON_API_URL}/pokemon/?limit=1126`);
      // const data = await response.json();
      // const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1126").then(data =>{

      return axios.get(`${POKEMON_API_URL}/pokemon/?limit=1126`);
      // .then((data) => {
      //   // console.log(data.data);
      //   setCount(data.data.count);
      //   setPokemonNames(data.data.results);
      //   setLoading(false);
      // });

      // const data = await response.json();
      // console.log(data);
      // setCount(data.count);
      // setPokemonNames(data.results);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  function setName(name) {
    setIsStats(true);
    setPokeName(name);
  }

  const fetchPokemonName = async (name) => {
    
      try {
        //setStatsLoading(true);
        // console.log(name);
        return axios.get(`${POKEMON_API_URL}/pokemon/${name}`);
        // const response = await fetch(`${POKEMON_API_URL}/pokemon/${name}`);
        // const data = await response.json();
        // console.log(data);
        // setPokemon(data);
        // setStatsLoading(false);
      } catch (error) {
        console.log(error);
      }
 
    //const { isLoading, data, isError, error } = useQuery(name, pokeStats);
    //console.log(data);
  }

  return (
    <PokedexContext.Provider
      value={{
        count,
        loading,
        statsLoading,
        pokemonNames,
        pokemon_,
        isStats,
        pokename,
        fetchPokemons,
        fetchPokemonName,
        setName,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexContext;
