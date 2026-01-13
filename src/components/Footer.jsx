import "./Footer.css"
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa';
import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"

function Footer() {
    return (
        <footer className="home-footer">
            <span className="home-footer-copyright">&copy; {new Date().getFullYear()} "Anime Gallery Hub"</span>
            <div className="home-footer-logo-container">
                <h1 className="footer-site-name">Anime gallery hub</h1>
                <NavLink to='/ToHomePage'><img className="footer-site-logo" src={Logo} alt="logo image" /></NavLink>
            </div>
            <div className="home-footer-social">
                <a href="https://github.com/dzyker"><FaGithub size={60} color="#333" /></a>
                <a href="https://t.me/Shumaxi"><FaTelegram size={60} color="#229ED9" /></a>
                <a href="https://vk.com/maxmacksimovich"><FaVk size={60} color="#425bdb" /></a>
            </div>
        </footer>
    )
}

export default Footer