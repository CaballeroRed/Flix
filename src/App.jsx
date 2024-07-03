import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles/Index";
import Cabecera from "./components/Header/index";
import PiePagina from "./components/Footer/Footer";
import Home from "./Pages/Inicio.jsx";
import NewVideo from "./Pages/NewVideo";

const FondoColor = styled.div`
  background-color: gray;
  width: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-video" element={<NewVideo />} />
        </Routes>
      </Router>
      <FondoColor>
        <GlobalStyles />
        <Cabecera />
        <PiePagina />
      </FondoColor>
    </>
  );
}

export default App;
