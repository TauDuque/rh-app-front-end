import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";
import { SglWorker_icn } from "../assets";

const SingleWorker = () => {
  return (
    <Wrapper>
      <h2>Dados do Funcionário</h2>
      <div>
        <img src={SglWorker_icn} alt="icon" />
      </div>
      <hr />
      <div>
        <span>nome:</span>
        <h4>Jonas</h4>
      </div>
      <div>
        <span>E-mail:</span>
        <h4>joninha@empresa.com</h4>
      </div>
      <div>
        <span>Data de Nascimento : </span>
        <h4>24/12/1992</h4>
      </div>
      <div>
        <span>Data de Admissão : </span>
        <h4>24/01/2017</h4>
      </div>
      <div>
        <span>setor:</span>
        <h4>Vendas</h4>
      </div>
      <div>
        <span>cargo:</span>
        <h4>Diretor</h4>
      </div>
      <div>
        <span>nível:</span>
        <h4>Senior</h4>
      </div>
      <div>
        <button
          type="submit"
          className="primary-btn primary-btn-2 grow sgl-worker-btn"
        >
          Deletar
        </button>
        <button
          type="submit"
          className="primary-btn primary-btn-2 grow sgl-worker-btn second-btn"
        >
          Atualizar
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: var(--classic-black);
  background: var(--white-smoke);
  position: absolute;
  top: 45px;
  left: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 20px;
  }

  h4 {
    text-align: center;
  }

  span {
    padding-right: 4px;
  }

  hr {
    border-top: 2px solid var(--vampire-black);
    width: 220px;
    margin: 12px;
  }
  .sgl-worker-btn {
    margin-top: 5px;
    margin: 10px;
    width: 100px;
    height: 25px;
    background-image: linear-gradient(
      204deg,
      var(--clr-blue),
      #ff3d77,
      var(--strong-yellow),
      var(--clr-grey-2)
    );
    box-shadow: 0 6px 15px rgba(255, 166, 61, 0.39),
      0 8px 12px rgba(255, 61, 119, 0.34), 6px 5px 10px rgba(51, 138, 255, 0.45);
    font-size: 20px;
    color: var(--vampire-black);
  }
  .second-btn {
    background-image: linear-gradient(
      112deg,
      var(--strong-yellow),
      var(--clr-grey-2),
      var(--clr-blue),
      #ff3d77
    );
  }
  @media (min-width: 992px) {
    position: static;
    height: 85%;
    width: 50%;
    border-radius: 8px;
    margin-left: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .sgl-worker-btn {
      margin-top: 5px;
      margin: 25px;
      width: 180px;
      height: 45px;
    }
    h2 {
      margin-top: 30px;
    }

    h4 {
      text-align: center;
    }

    div {
      display: flex;
      justify-content: center;
    }

    span {
      padding-right: 8px;
    }
  }
`;

export default SingleWorker;
