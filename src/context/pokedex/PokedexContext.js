import { createContext, useState } from "react";

const PokedexContext = createContext();

const POKEMON_API_URL = process.env.REACT_APP_POKEMON_API_URL;

export const PokedexProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([{}]);
  const [pokemon_, setPokemon] = useState({})

  const fetchPokemons = async () => {
    const response = await fetch(`${POKEMON_API_URL}/pokemon/?limit=1126`);

    const data = await response.json();

    setCount(data.count);
    setPokemons(data.results);
    setLoading(false);
  };

  const fetchPokemonNames = async (name) => {
    const response = await fetch(`${POKEMON_API_URL}/pokemon/${name}`);

    const data = await response.json();
    console.log(data.id);
    setPokemon(data);
  };


  return (
    <PokedexContext.Provider
      value={{
        count,
        loading,
        pokemons,
        pokemon_,
        fetchPokemons,
        fetchPokemonNames,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexContext;
