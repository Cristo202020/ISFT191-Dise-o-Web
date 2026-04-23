import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Usuarios from './pages/Usuarios'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import UsuarioDetalle from './pages/UsuarioDetalle'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
      </Routes>
    </>
  );
}

export default App