import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/usuarios">Usuarios</NavLink>
            <NavLink to='/acerca'>Acerca</NavLink>
            <NavLink to='/contacto'>Contacto</NavLink>
        </nav>
    )
}

export default Navbar