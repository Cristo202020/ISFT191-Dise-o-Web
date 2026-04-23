import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div id="center">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la URL que buscas no existe.</p>
      <Link to="/" className="counter btn-back" >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;