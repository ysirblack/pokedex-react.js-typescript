import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useContext, useEffect } from "react";

function PokemonItem({ pokemon }) {
  const { pokemon_, fetchPokemonNames } = useContext(PokedexContext);

  // useEffect(() => {
  //   fetchPokemonNames(pokemon.name);
  // }, []);

  function handleClick()  {
    fetchPokemonNames(pokemon.name);
  }


  return (
    <div className="container flex flex-row mb-1 justify-between">
      <p onClick={handleClick}>
        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
      </p>
      <p className="mr-5"> {pokemon_.id} </p>
    </div>
  );
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;
