import './details.css'

export function Details({pokemon}){ 
    console.log(typeof pokemon, pokemon)
    console.log('a',pokemon.abilities)
    return(
        <div  className='card-details'>
            <h1>Details</h1>
            <span>{pokemon.name}</span>
            <div>
            {pokemon.abilities.map( abilitie => {
                console.log("----",abilitie)
                return(
                <div key={abilitie.ability.name}>
                    <p>Name: {abilitie.ability.name} </p>
                    <p>Effect: {abilitie.ability.short_effect} </p>
                </div> )       
        
            }
            )}
            </div>
        </div>
        
    
        
    )
    
}