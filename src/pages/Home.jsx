import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const irAPokemon = () => {
    if (!id) return alert('Ingresá un ID');
    navigate(`/usuarios/${id}`);
  };

  return (
    <div>
      <h1>Bienvenido</h1>
      <p>En esta aplicación puedes explorar una lista de Pokémon y ver sus detalles. Para comenzar, ingresa el ID de un Pokémon y haz clic en "Ver Pokémon".</p>
      <br />
      
      <input
        type="number"
        placeholder="ID del Pokémon"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={irAPokemon}>
        Ver Pokémon
      </button>
    </div>
  );
}

export default Home;