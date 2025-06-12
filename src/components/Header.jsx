import React from "react";
import '../styles/Header.css'; 


function Header() {
    return (
        <header className="header-section">
            <div className="header__container">
                <a href="#home" className="header__logo-link">
                    <h1 className="header__title">Ana Livia Turazzi</h1>
                </a>   
            

                <nav className='main-nav'>
                    <ul>
                        <li><a href='#home'>Início</a></li>
                        <li><a href='#sobre'>Habilidades</a></li>
                        <li><a href='#projetos'>Projetos</a></li>
                        <li><a href='#contato'>Contato</a></li>
                    </ul>
                </nav>

            </div>
    
        </header>

    );
}

export default Header;