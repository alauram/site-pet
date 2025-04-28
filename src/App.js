import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Eventos from "./components/Eventos";
import SelecionarEventos from "./components/selecionarEventos";

import "./components/globals.css";
import "./components/styleguide.css";
import "./components/eventos.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Eventos />} />
        <Route path="/selecionar-eventos" element={<SelecionarEventos />} />
      </Routes>
    </Router>
  );
}

export default App;
