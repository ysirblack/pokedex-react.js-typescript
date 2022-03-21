import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useContext } from "react";

function PokemonItem({ name, number }) {
  const { setName ,setHovered,setClick} = useContext(PokedexContext);

  //when a pokemon name clicked it will be set the name of it
  const handleClick = () => {
    setClick(true);
  }

  const handleHover = () => {
    setName(name);
  }
  
  const handleLeave = ()=>{
    setHovered(false);
    setClick(false);
  }

  return (
    <div className="container flex flex-row mb-3 justify-between" >
      <p onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleLeave} >
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
