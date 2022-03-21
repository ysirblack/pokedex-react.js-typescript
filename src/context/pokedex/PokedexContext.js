import { createContext, useState } from "react";
import axios from "axios";

const PokedexContext = createContext();

const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API_URL;

export const PokedexProvider = ({ children }) => {

  const [pokename, setPokeName] = useState("");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

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
    setPokeName(name);
    setHovered(true);
  }

  function setClick(condition) {
    setClicked(condition);
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

        pokename,
        hovered,
        clicked,
        fetchPokemons,
        fetchPokemonName,
        setName,
        setHovered,
        setClick
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export default PokedexContext;
