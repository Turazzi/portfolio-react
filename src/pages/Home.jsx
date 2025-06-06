import React from "react";
import '../style/Home.css'
import profileImage from '../assets/icons/perfil.jpeg';
import draw from '../assets/icons/perfil-desenho.png'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Home = () => {
    return (
        <main className='main-container'>
        
            <section className='section-home'>
                <img
                    src={profileImage}
                    alt="Foto de perfil Ana Livia Turazzi"
                    className='profile-image'
                />
                <h2 className='hero-name'>Olá, eu sou a Ana Livia Turazzi!</h2>
                <p className='hero-title'>Desenvolvedora FullStack</p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/ana-turazzi/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Turazzi" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/ana.turazzi/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>

                <div>
                    <a href="#about-section" className='button-about-me'>
                        Sobre Mim
                    </a>
                </div>
            </section>

            <section id='about-section' className='about-me-section'>
                <div className='about-me-content'>
                    <div className='about-me-text-column'>
                        <h2 className='about-me-title'>Sobre mim</h2>
                        <p>
                            Sou estudante de Engenharia de Software, com foco em backend e interesse por frontend. 
                            Gosto muito da área de tecnologia e estou em busca da minha primeira oportunidade profissionalç.
                            Neste portfólio, compartilho alguns dos meus projetos e um pouco sobre mim.
                        </p>
                    </div>
                    <img src={draw} alt="Desenho de Ana Livia Turazzi" className='about-me-image' />
                </div>
            </section>
        </main>
    )
}

export default Home;