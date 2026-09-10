import { NavLink } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className="navbar__link">
                Home
            </NavLink>
            <NavLink to="/portfolio" className="navbar__link">
                Portfolio
            </NavLink>
        </nav>
    )
}

export default NavBar