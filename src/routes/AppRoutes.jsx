
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'; 
import Projects from '../pages/Projects';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos" element={<Projects />} />
    </Routes>
  );
}