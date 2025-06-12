import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleAnchorLinkClick = (hash) => {
        if (location.pathname === '/') {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/' + hash);
        }
    };

    return (
        <header className="header-section">
            <div className="header__container">
                <a href="/#home" onClick={(e) => { e.preventDefault(); handleAnchorLinkClick('#home'); }} className="header__logo-link">
                    <h1 className="header__title">Ana Livia Turazzi</h1>
                </a>

                <nav className="main-nav">
                    <ul>
                        <li><a href="#home" onClick={(e) => { e.preventDefault(); handleAnchorLinkClick('#home'); }}>Home</a></li>
                        <li><a href="#habilidades" onClick={(e) => { e.preventDefault(); handleAnchorLinkClick('#habilidades'); }}>Habilidades</a></li>
                        
                        <li><Link to="/projetos">Projetos</Link></li>
                        
                        <li><a href="#contato" onClick={(e) => { e.preventDefault(); handleAnchorLinkClick('#contato'); }}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;