import { useState } from 'react'
import {Details} from './Details.jsx'
import './PokeCard.css'



export function PokeCard(pokemon){

    const [show, setShow] = useState(false);
    //const poke_mon = pokemon
    
    return(
        <article className="poke-card" >
            <header className="poke-card-header">
                <img className="poke-card-sprite" src={pokemon.sprites.front_default} alt={pokemon.name} />
                
                    <h1 className="poke-card-name">{pokemon.name}</h1>
                

            </header>
            <aside className='poke-card-detail' >
                <button className='poke-card-button' onClick={() => setShow(!show)}>
                    {show ? "Hide " : "Show "} 
                    <span className=''>Details</span>
                </button>
                
                
            </aside>
            {show ? <Details key={pokemon.id} pokemon={pokemon}/> : null}

        </article>
        

    )
}
//{show ? <Details pokemon={pokemon} /> : null}