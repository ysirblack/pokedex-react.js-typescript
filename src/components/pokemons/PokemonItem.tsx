import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useContext } from "react";
import { PokeContextType } from "../../context/pokedex/PokedexContext";

interface PokemonItemProps {
    name: string,
    number: number
}

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
    <div className="container flex flex-row mb-3 justify-between">
      <p onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
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
