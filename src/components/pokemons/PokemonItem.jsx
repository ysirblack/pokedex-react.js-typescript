import React from 'react'
import PropTypes from 'prop-types'
import {Link}  from 'react-router-dom'

function PokemonItem({pokemon}) {
  return (
  <p>
    <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
  </p> 
  )
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
}


export default PokemonItem