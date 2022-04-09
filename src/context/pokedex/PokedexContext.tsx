import axios from "axios";
import * as React from 'react';
import { PokeContextType } from "../../lib/interfaces/interfaces";


const PokedexContext = React.createContext<PokeContextType | null>(null)

const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API_URL;

export const PokedexProvider : React.FC<React.ReactNode> = ({ children }) => {
  const [pokename, setPokeName] = React.useState("");
  const [hovered, setHovered] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  // fetches all pokemon names
  const fetchPokemons = async () => {
    try {
      return axios.get(`${POKEMON_API_URL}/pokemon/?limit=1126`);
    } catch (error) {
      console.log(error);
    }
  };

  //sets the selected pokemon name to be shown in the stats section
  function setName(name: string) {
    setPokeName(name);
    setHovered(true);
  }

  function setClick(condition: boolean) {
    setClicked(condition);
  }

  //gets pokemon stats acording to the given name
  const fetchPokemonName = async (name: string) => {
    try {
      return axios.get(`${POKEMON_API_URL}/pokemon/${name}`);
    } catch (error) {
      console.log(error);
    }
  };

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
        setClick,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexContext;