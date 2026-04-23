import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=48')
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data.results);
        setCargando(false);
      })
      .catch(() => {
        setError('Error al cargar los datos');
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Pokémon</h1>

      <div className="grid">
        {usuarios.map((pokemon, index) => (
          <Link
            key={pokemon.name}
            to={`/usuarios/${index + 1}`}
            className="card"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Usuarios;