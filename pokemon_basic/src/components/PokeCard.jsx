import { useState } from 'react'
import {Details} from './Details.jsx'
import './PokeCard.css'

/*export function PokeCard({poke_name, poke_sprite}){

    const [show, setShow] = useState(false);
    
    return(
        <article className="poke-card" >
            <header className="poke-card-header">
                <img className="poke-card-sprite" src={poke_sprite} alt={poke_name} />
                <div className="poke-card-info">
                    <h1 className="poke-card-name">{poke_name}</h1>
                </div>

            </header>
            <aside className='poke-card-detail' >
                <button className='poke-card-button' onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Show"} 
                    <span className=''>Details</span>
                </button>
                {show ? <Details pokemon={'hola'} /> : null}
            </aside>

        </article>

    )
}*/

export function PokeCard(pokemon){

    const [show, setShow] = useState(false);
    //const poke_mon = pokemon
    
    return(
        <article className="poke-card" >
            <header className="poke-card-header">
                <img className="poke-card-sprite" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="poke-card-info">
                    <h1 className="poke-card-name">{pokemon.name}</h1>
                </div>

            </header>
            <aside className='poke-card-detail' >
                <button className='poke-card-button' onClick={() => setShow(!show)}>
                    {show ? "Hide " : "Show "} 
                    <span className=''>Details</span>
                </button>
                {show ? <Details key={pokemon.id} {...pokemon} /> : null}
                
            </aside>

        </article>

    )
}
//{show ? <Details pokemon={pokemon} /> : null}