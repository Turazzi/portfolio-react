// Em: src/pages/About.jsx

import React from 'react';
import '../styles/About.css';
import { FaJava, FaReact, FaGitAlt, FaGithub, FaDatabase, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiPostman, SiSpringboot, SiBulma, SiOracle, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si';

const About = () => {
  return (
    <main id="sobre" className='page-container about-page-wrapper'>
        <h1 className='page-title'>Minhas Habilidades</h1>

        <div className='skills-showcase-grid'>

            <div className='skill-showcase-card'>
                <h2><FaJava /> Linguagens</h2>

                <div className='skill-list'>
                    <span className='skill-tag'><FaJava /> Java</span>
                    <span className='skill-tag'><SiKotlin /> Kotlin</span>
                    <span className='skill-tag'><SiJavascript /> JavaScript</span>
                    <span className='skill-tag'><FaDatabase /> PL/SQL</span>
                </div>
            </div>

            <div className='skill-showcase-card'>
                <h2><FaReact /> Frameworks/Bibliotecas</h2>
                
                <div className='skill-list'>
                    <span className='skill-tag'><FaReact /> React.js</span>
                    <span className='skill-tag'><SiSpringboot /> Spring Boot</span>
                    <span className='skill-tag'><SiBulma /> Bulma</span>
                    <span className='skill-tag'><FaNodeJs /> Node.js</span>
                </div>
            </div>

            <div className='skill-showcase-card'>
                <h2><FaGitAlt /> Ferramentas/Tecnologias</h2>

                <div className='skill-list'>
                    <span className='skill-tag'><SiPostman /> Postman</span>
                    <span className='skill-tag'><FaGithub /> Git/GitHub</span>
                    <span className='skill-tag'><FaDocker /> Docker</span>
                </div>
            </div>

            <div className='skill-showcase-card'>
                <h2><FaDatabase /> Databases</h2>

                <div className='skill-list'>
                    <span className='skill-tag'><SiOracle /> Oracle</span>
                    <span className='skill-tag'><SiPostgresql /> PostgreSQL</span>
                    <span className='skill-tag'><SiMysql /> MySQL</span>
                    <span className='skill-tag'><SiMongodb /> MongoDB</span>
                </div>
            </div>

        </div>
    </main>
  );
};

export default About;