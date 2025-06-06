import React from "react";
import '../style/Home.css'
import profileImage from '../assets/icons/perfil.jpeg';


const Home = () => {
    return (
        <main className='page-container'>
        
            <section className='section-home'>

                <img
                    src={profileImage}
                    alt="Foto de perfil Ana Livia Turazzi"
                    className='profile-image'
                />
                <h2 className='page-container'>Olá, eu sou a Ana Livia Turazzi!</h2>
                <p className='page-tile'>Desenvolvedora FullStack</p>

            </section>

        </main>
    )
}

export default Home;