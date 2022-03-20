import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useContext, useEffect } from "react";


function PokemonItem({ name, number }) {
  const { pokemon_, fetchPokemonName } = useContext(PokedexContext);


  function handleClick() {
    fetchPokemonName(name);
  }

  return (
    <div className="container flex flex-row mb-1 justify-between">
      <p onClick={handleClick}>
        <Link to={`/pokemon/${name}`}>{name} </Link>
      </p>
      <p className="mr-5"> {number} </p>
    </div>
  );
}

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PokemonItem;
