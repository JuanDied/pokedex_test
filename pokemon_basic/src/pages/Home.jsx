import { PokeCard } from "../components/PokeCard.jsx";

import './Home.css'
//import pokemons from "../data/poke-json.json";
import { useEffect, useState } from "react";
import usePokemonSearch from '../hooks/usePokemonSearch';

export function Home() {
  //console.log(typeof pokemons, pokemons);


  const defaultPokemons = ['ditto' , 'pikachu' ];

  const [searchName, setSearchName] = useState('');
  const { pokemonData, loading, error } = usePokemonSearch(searchName);

  const preloadDefaultPokemons = async () => {
    // Preload default Pokémons
    for (const pokemonName of defaultPokemons) {
      await setSearchName(pokemonName);
    }
    
  };

  useEffect(() => {
    
    preloadDefaultPokemons();
    
    
  },[])

  const[value, setValue] = useState(''); 
  function handle(){
    console.log("handle",value)
    setSearchName(value)
  }
  console.log("handle",value)

  return (
    
    <article className="search-side">
      
      <header>
        <h1>Search a Pokemon</h1>
        <form className='form' onSubmit={console.log('submitedddd')}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} value={value}  onChange={(e) => {setValue(e.target.value)}}  name='query' placeholder='bulbasaur, charmander..'
          />
          <button className="poke-card-button" type='button' onClick={handle}>Search</button>
        </form>
        
      </header>
    <aside>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}

    <div className="list-of-pokemons">
      
        
    {Array.isArray(pokemonData) ? (
            pokemonData.map(pokemon => (
              <PokeCard key={pokemon.id} {...pokemon}/>
            ))
          ) : (
            <PokeCard key={pokemonData.id} {...pokemonData}/>
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