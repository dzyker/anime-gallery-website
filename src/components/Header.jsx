import { NavLink } from "react-router-dom"
import './Header.css'

function Header() {
    return (
        <header className='header-nav'>
            <nav>
                <NavLink to='/' end className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Home</NavLink>
                <NavLink to='/gallery' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Gallery</NavLink>
                <NavLink to='/favorites' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Favorites</NavLink>
                <NavLink to='/settings' className={({isActive}) => isActive ? "header-nav__link active" : "header-nav__link"}>Settings</NavLink>
            </nav>
        </header>
    )
}

export default Header