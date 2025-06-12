import React from 'react';

import Home from './Home'; 
import About from './About';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>

      <section id="home">
        <Home />
      </section>

      <section id="habilidades">
        <About />
      </section>

      <section id="contato">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;