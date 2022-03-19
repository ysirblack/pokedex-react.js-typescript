import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([{}]);

  useEffect(()=> {
    fetchPokemons();
  },[])

  const fetchPokemons = async () =>  {
    const response = await fetch(`${process.env.REACT_APP_POKEMON_API_URL}/pokemon/?limit=1126`);

    const data = await response.json();

    setCount(data.count);
    setPokemons(data.results);
    setLoading(false);
    console.log(pokemons[0].name);


  }
  if(!loading){
    return (
      <div>
        <h1 className="text-3xl mb-3"> Search for a Pokemon among number of <span className="text-red-500">{count}!</span></h1>
        <div className='grid grid-cols-2 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {pokemons.map((pokemon) => (
            <p><Link to="/pokemon">{pokemon.name}</Link></p>
          ))}
        </div>
      </div>
    );
  }
  else{
   return <h3> Loading..</h3>
  }
 
}

export default Home;
