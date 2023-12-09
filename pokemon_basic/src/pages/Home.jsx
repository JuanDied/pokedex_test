import { PokeCard } from "../components/PokeCard.jsx";

import './Home.css'
import pokemons from "../data/poke-json.json";
import { useState } from "react";
import usePokemonSearch from '../hooks/usePokemonSearch';

export function Home() {
  console.log(typeof pokemons, pokemons);

  //const error = false

  const [searchName, setSearchName] = useState('');
  const { pokemonData, loading, error } = usePokemonSearch(searchName);

/*
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  } 
  {error && <p style={{ color: 'red' }}>{error}</p>}
*/
  return (
    <article className="search-side">
      <header>
        <h1>Search a Pokemon</h1>
        <form className='form' onSubmit={console.log('submitedddd')}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={(e) => setSearchName(e.target.value)}  value={searchName} name='query' placeholder='bulbasaur, charmander..'
          />
          <button className="poke-card-button" type='submit'>Search</button>
        </form>
        
      </header>
    <aside>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}

    <div className="list-of-pokemons">
      {pokemonData ? (
        <PokeCard key={pokemonData.id} {...pokemonData}/>
      ):(
        pokemons.map(
          pokemon => (
          
  
            <PokeCard key={pokemon.id} {...pokemon}/>
          
          )
        )
      )}


 
    </div>
    </aside>
    </article>
  );
}

/*
     {pokemons.map(
        pokemon => (
        

          <PokeCard key={pokemon.id} {...pokemon}/>
        
        )
      )}
*/

/*
          <PokeCard
            key={pokemon.id}
            poke_name={pokemon.name}
            poke_sprite={pokemon.sprites.front_default}
          />*/