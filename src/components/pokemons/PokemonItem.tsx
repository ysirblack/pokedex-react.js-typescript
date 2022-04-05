import React from "react";
import { Link } from "react-router-dom";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useContext } from "react";
import { PokeContextType } from "../../lib/interfaces/interfaces";
import { PokemonItemProps } from "../../lib/interfaces/interfaces";

const PokemonItem: React.FC<PokemonItemProps> = ({ name, number }) => {
  const { setName, setClick } = useContext(PokedexContext) as PokeContextType;

  const handleHover = () => {
    setName(name);
  };

  return (
    <div className="container flex flex-row mb-3 justify-between text-xs sm:text-xs md:text-base lg:text-lg">
      <p
        onClick={() => {
          setClick();
        }}
        onMouseEnter={handleHover}
      >
        <Link to={`/pokemon/${name}`}>{name} </Link>
      </p>
      <p className="mr-5"> {number} </p>
    </div>
  );
};

export default PokemonItem;
