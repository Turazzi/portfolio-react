import React from "react";
import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';
import StarField from './components/StarField';


function App() {
  return (
    <>
      <StarField />
      <Header />

      <section id='home'>
        <Home />
      </section>

      <section className='page-section'>
        <About />
      </section>

      <section id='projetos' className='page-section'>
        <Projects />
      </section>

      <section id='contato' className='page-section'>
        <Contact />
      </section>

      <Footer />

    </>
  )
}

export default App;