import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="section section-center">
      <h2>Bem-Vindo</h2>
      <button className="primary-btn primary-btn-2 grow"></button>
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
`;

export default Home;
