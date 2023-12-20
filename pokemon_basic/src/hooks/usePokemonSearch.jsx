/*import { useState, useEffect } from 'react';

const usePokemonSearch = (pokemonName) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon data')
        }
        const data = await response.json();
        setPokemonData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };

    
    if (pokemonName) {
      fetchPokemon()
    }

  }, [pokemonName])

  return { pokemonData, loading, error }
}

export default usePokemonSearch
*/

import { useState, useEffect } from 'react';

const usePokemonSearch = (pokemonNames) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async (name) => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${name}`);
        }
        const data = await response.json();
        setPokemonData((prevData) => [...prevData, data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchDataForAllPokemons = async () => {
      // Reset previous data
      setPokemonData([]);
      setError(null);

      // Fetch data for each Pokémon
      if (Array.isArray(pokemonNames)) {
        for (const name of pokemonNames) {
          await fetchPokemonData(name);
        }
      } else if (typeof pokemonNames === 'string') {
        await fetchPokemonData(pokemonNames);
      }
    };

    if (pokemonNames) {
      fetchDataForAllPokemons();
    }

  }, [pokemonNames]);

  return { pokemonData, loading, error };
};

export default usePokemonSearch;
