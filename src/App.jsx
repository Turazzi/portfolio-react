
import React from 'react';
import { Outlet } from 'react-router-dom'; 

import StarField from './components/StarField';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/App.css';

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
  );
}

export default App;