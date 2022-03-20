import { createContext, useState } from "react";
import axios from "axios";

const PokedexContext = createContext();

const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API_URL;

export const PokedexProvider = ({ children }) => {

  const [isStats, setIsStats] = useState(false);
  const [pokename, setPokeName] = useState("");

  const fetchPokemons = async () => {
    try {
      return axios.get(`${POKEMON_API_URL}/pokemon/?limit=1126`);
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
        return axios.get(`${POKEMON_API_URL}/pokemon/${name}`);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <PokedexContext.Provider
      value={{
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
}

export default PokedexContext;
