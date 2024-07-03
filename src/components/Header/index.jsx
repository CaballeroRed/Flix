import React from "react";
import styled from "styled-components";

const HeaderEstilizado = styled.header`
  padding: 30px 0%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  img {
    width: 150px;
  }
`;

const NavButton = styled.button`
  text-decoration: none;
  background-color: #8b8cf0;
  color: black;
  font-size: 20px;
  height: 40px;
  margin-right: 20px;
  border-radius: 5px;
  border: none;
`;

const Cabecera = () => {
  return (
    <HeaderEstilizado>
      <img src="img/LogoMain.png" alt="logo alura" />
      <nav>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/newvideo">Nuevo Video</NavButton>
      </nav>
    </HeaderEstilizado>
  );
};

export default Cabecera;
