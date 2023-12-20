import { useEffect, useState } from "react"

const usePokAbilitySearch = (abilityID)=>{
    const[abilityData, setAbilityData] = useState(null)
    //const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityID}`)
                if(!response.ok){
                    throw new error(`No ability with ID: ${abilityID}`)
                }
                const data = await response.json
                setAbilityData(data)
            } 
            catch (error) {
                setError(error.message)
            }

            if(abilityID){
                fetchData()
            }
        }
    },[abilityID])

    return {abilityData, error}
}

export default usePokAbilitySearch