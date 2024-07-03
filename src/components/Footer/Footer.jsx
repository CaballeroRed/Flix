import React from "react";
import styled from "styled-components";

const FooterEstilizado = styled.footer`
  margin-top: 80%;
  margin-bottom: 0;
  padding: 30px 0%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  img {
    width: 150px;
    position: center;
  }
`;

const PiePagina = () => {
  return (
    <FooterEstilizado>
      <img src="img/LogoMain.png" alt="logo alura" />
    </FooterEstilizado>
  );
};

export default PiePagina;
