import React from 'react'
import { useQuery } from "react-query";


function PokeFetch() {

  const response = useQuery(pokename, () =>{ return fetchPokemonName(pokename)});

  return ({response})
  
}

export default PokeFetch