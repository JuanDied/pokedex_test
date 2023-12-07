import './details.css'

export function Details(pokemon){ 
    console.log(typeof pokemon, pokemon)
    console.log(pokemon.name)
    return(
        <div  className='card-details'>
            <h1>Details</h1>
            <span>{pokemon.name}</span>
            <div>
            {pokemon.abilities.map( habilitie => (
                <div key={habilitie.name}>
                    <p>Name: {habilitie.name} </p>
                    <p>Effect: {habilitie.short_effect} </p>
                </div>        
        
            )
            )}
            </div>
        </div>
        
    
        
    )
    
}