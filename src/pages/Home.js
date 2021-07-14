import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="section section-center">
      <h2>Bem-Vindo</h2>
      <div>
        <button className="primary-btn primary-btn-2 grow">Acessar</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: linear-gradient(
    119deg,
    var(--white-smoke) 32%,
    var(--clr-grey) 60%,
    var(--clr-grey-2)
  );
  opacity: 0.94;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: var(--primary-font);
    color: var(--classic-black);
  }
  @media (min-width: 992px) {
  }
`;

export default Home;
