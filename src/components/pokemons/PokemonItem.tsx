import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useContext } from "react";
import { PokeContextType } from "../../lib/interfaces/interfaces";
import { PokemonItemProps } from "../../lib/interfaces/interfaces";

const PokemonItem: React.FC<PokemonItemProps> = ({ name, number }) => {
  const { setName, setHovered, setClick } = useContext(PokedexContext) as PokeContextType;

  //when a pokemon name clicked it will be set the name of it
  const handleClick = () => {
    setClick(true);
  };

  const handleHover = () => {
    setName(name);
  };

  const handleLeave = () => {
    setHovered(false);
    setClick(false);
  };

  return (
    <div className="container flex flex-row mb-3 justify-between text-xs sm:text-xs md:text-base lg:text-lg">
      <p onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <Link to={`/pokemon/${name}`}>{name} </Link>
      </p>
      <p className="mr-5"> {number} </p>
    </div>
  );
};


export default PokemonItem;
