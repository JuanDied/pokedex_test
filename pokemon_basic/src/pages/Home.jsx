import { PokeCard } from "../components/PokeCard.jsx";

import './Home.css'
import pokemons from "../data/poke-json.json";
import { useState } from "react";

export function Home() {
  console.log(typeof pokemons, pokemons);
  const [search, updateSearch] = useState('')
  const error = false
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
            }}  value={search} name='query' placeholder='pikachu, ditto..'
          />
          <button className="poke-card-button" type='submit'>Search</button>
        </form>
        
      </header>
    <aside>
    <div className="list-of-pokemons">
      {pokemons.map(
        pokemon => (
        

          <PokeCard key={pokemon.id} {...pokemon}/>
        
        )
      )}
    </div>
    </aside>
    </article>
  );
}
/*
          <PokeCard
            key={pokemon.id}
            poke_name={pokemon.name}
            poke_sprite={pokemon.sprites.front_default}
          />*/