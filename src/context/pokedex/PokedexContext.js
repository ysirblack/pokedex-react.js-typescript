import { createContext, useState } from "react";
import axios from "axios";

const PokedexContext = createContext();

const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API_URL;

export const PokedexProvider = ({ children }) => {

  const [isStats, setIsStats] = useState(false);
  const [pokename, setPokeName] = useState("");


  // fetches all pokemon names 
  const fetchPokemons = async () => { 
    try {
      return axios.get(`${POKEMON_API_URL}/pokemon/?limit=1126`);
    } catch (error) {
      console.log(error);
    }
  }

  //sets the selected pokemon name to be shown in the stats section
  function setName(name) {
    setIsStats(true);
    setPokeName(name);
  }

  //gets pokemon stats acording to the given name
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
