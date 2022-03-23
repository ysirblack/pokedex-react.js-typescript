import React from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavbarProps } from "../../lib/interfaces/interfaces";

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg  bg-red-500 text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <MdCatchingPokemon className="inline pr-2 text-5xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-1 mx-1">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Pokedex",
};

export default Navbar;
