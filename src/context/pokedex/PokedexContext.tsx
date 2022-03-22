import { createContext, useState } from "react";
import axios from "axios";
import * as React from 'react';

export interface PokeContextType {
  pokename: string;
  hovered: boolean;
  clicked: boolean;
  fetchPokemons: Function;
  fetchPokemonName:(name: string) => void;
  setName: (name: string) => void;
  setHovered:Function;
  setClick: (condition: boolean) => void;
}

const PokedexContext = React.createContext<PokeContextType | null>(null)

const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API_URL;

export const PokedexProvider : React.FC<React.ReactNode> = ({ children }) => {
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
// return (
//   <PokedexContext.Provider
//     value={{
//       pokename,
//       hovered,
//       clicked,
//       fetchPokemons,
//       fetchPokemonName,
//       setName,
//       setHovered,
//       setClick,
//     }}
//   >
//     {children}
//   </PokedexContext.Provider>
// );