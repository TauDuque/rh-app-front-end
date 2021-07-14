import React from "react";
import styled from "styled-components";
import { Menu_icn } from "../assets";

const SideMenu = () => {
  return (
    <Wrapper>
      <img src={Menu_icn} alt="icon" />
      <ul>
        <li>Cadastrar Novo Funcionário</li>
        <li>Visualizar Cadastros</li>
        <li>Visualizar Último Cadastro</li>
        <li>Sair</li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 540px;
  width: 300px;
  display: flex;
  background-image: linear-gradient(
    289deg,
    var(--white-smoke) 32%,
    var(--clr-grey) 60%,
    var(--clr-grey-2)
  );
  border-radius: 8px;
  box-shadow: 0 7px 19px rgba(255, 166, 61, 0.35),
    0 14px 35px rgba(255, 61, 119, 0.14), 10px 6px 28px rgba(51, 138, 255, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    margin-left: 50px;
  }
`;

export default SideMenu;
