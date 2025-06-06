import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'; 


function Header() {
    return (
        <header className="header-section">
            <div className="header__container">
                <h1 className="header__title">Ana Livia Turazzi</h1>

                <nav className='main-nav'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">Sobre</Link></li>
                        <li><Link to="/Projects">Projetos</Link></li>
                        <li><Link to="/Contacts">Contatos</Link></li>
                    </ul>
                </nav>
            
            </div>

        
        </header>

    );
}

export default Header;