
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage'; 
import Projects from '../pages/Projects';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        
        <Route index element={<HomePage />} />

        <Route path="projetos" element={<Projects />} />

      </Route>
    </Routes>
  );
}