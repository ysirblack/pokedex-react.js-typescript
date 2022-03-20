import React from "react";

function PokemonStats({ pokemon }) {
  return (
    <div className="absolute position-stats overflow-y-scroll h-60">
       <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon ID: {pokemon.id} </p>
       <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Typye: {pokemon.types[0].type.name} </p> 
       <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon HP: {pokemon.stats[0].base_stat} </p>
       <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Attack: {pokemon.stats[1].base_stat} </p>
       <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Defense: {pokemon.stats[2].base_stat} </p>
       <p className="mb-1 lg:text-lg md:text-base sm:text-sm">Pokemon Speed: {pokemon.stats[5].base_stat} </p>
      <img  src={pokemon.sprites.front_default} className= "w-4/6 place-self-center "/> 
     
    </div>
  );
}

export default PokemonStats;

