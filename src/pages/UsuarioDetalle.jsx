import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UsuarioDetalle() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
     const numero = Number(id);

    if (!Number.isInteger(numero) || numero <= 0) {
      setError(true);
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
     .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setPokemon(data))
      .catch(() => setError(true));
  }, [id]);

  if (error) {
    return (
      <div>
        <h2>Pokémon no válido ❌</h2>
        <Link to="/usuarios">Volver</Link>
      </div>
    );
  }
  if (!pokemon) return <p>Cargando...</p>;
  return (
    <div className="detalle-container">
      <div className="detalle-card">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <p><strong>Altura:</strong> {pokemon.height}</p>
        <p><strong>Peso:</strong> {pokemon.weight}</p>
        <p><strong>Experiencia:</strong> {pokemon.base_experience}</p>
        <p><strong>Tipos:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Habilidades:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <Link to="/usuarios" className="btn">⬅ Volver</Link>
      </div>
    </div>
  );
}

export default UsuarioDetalle;