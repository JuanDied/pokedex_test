
export function SpriteGride({sprites}){
    return(
        <div className="sprite-grid">
            
            {sprites.map( sprite=> (
                <img src={sprite.name} alt="" />
        
            )
            )}
            
        </div>
    )
}