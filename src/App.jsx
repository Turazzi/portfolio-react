import React from "react";
import { BrowserRouter } from "react-router-dom";
import StarField from "./components/StarField";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <StarField />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
