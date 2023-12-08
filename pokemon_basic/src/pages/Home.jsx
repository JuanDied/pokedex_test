import { PokeCard } from "../components/PokeCard.jsx";

import './Home.css'
import pokemons from "../data/poke-json.json";

export function Home() {
  console.log(typeof pokemons, pokemons);
  return (
    <div className="list-of-pokemons">
      {pokemons.map(
        pokemon => (
        

          <PokeCard key={pokemon.id} {...pokemon}/>
        
        )
      )}
    </div>
  );
}
/*
          <PokeCard
            key={pokemon.id}
            poke_name={pokemon.name}
            poke_sprite={pokemon.sprites.front_default}
          />*/