import './Details.css'

export function Details({pokemon}){ 
    console.log(typeof pokemon, pokemon)
    console.log('a',pokemon.abilities)
    return(
        <div  className='card-details'>
            <h1>Details</h1>
            <span>{pokemon.name}: Habilities</span>
            <div className='det-abilities'>
            {pokemon.abilities.map( ability => {
                console.log("----",ability)
                return(
                <div className='det-ability-u'
                key={ability.ability.name}>
                    <p>Name: {ability.ability.name} </p>
                    <p>Effect: {ability.ability.effect_entries[0].short_effect} </p>
                </div> )       
        
            }
            )}
            </div>
        </div>
        
    
        
    )
    
}