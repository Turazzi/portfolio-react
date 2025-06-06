// Em: src/components/Header.jsx

import React from "react";
import './styles/Header.css'; // Importa os estilos específicos deste componente

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Ana Livia Turazzi</h1>
            </div>
        </header>
    );
}

export default Header;