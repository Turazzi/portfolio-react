import React from "react";

import StarField from "./components/StarField";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <StarField />
        <Header />
        <AppRoutes />
        <Footer />
    </>
  )
}

export default App