import { useState, useEffect } from 'react';

const usePokemonSearch = (pokemonName) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon data');
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    
    if (pokemonName) {
      fetchPokemon();
    }

  }, [pokemonName]);

  return { pokemonData, loading, error };
};

export default usePokemonSearch;