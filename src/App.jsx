import React from "react";
import { Outlet } from 'react-router-dom'; // 1. Importe o Outlet
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
      
      <main>
        <Outlet />  
      </main>

      <Footer /> 
    </>
  )
}

export default App;