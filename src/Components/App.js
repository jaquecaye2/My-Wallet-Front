import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Context from "../Context/Context";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaRelatorio from "./TelaRelatorio";
import TelaNovaEntrada from "./TelaNovaEntrada";
import TelaNovaSaida from "./TelaNovaSaida";

export default function App() {
  const [token, setToken] = React.useState("");

  return (
    <Context.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/relatorio" element={<TelaRelatorio />} />
          <Route path="/novaEntrada" element={<TelaNovaEntrada />} />
          <Route path="/novaSaida" element={<TelaNovaSaida />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
