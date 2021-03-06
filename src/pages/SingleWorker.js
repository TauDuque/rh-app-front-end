import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory, Link } from "react-router-dom";
import { SglWorker_icn } from "../assets";
import { useGlobalContext } from "../context";
import { TextField } from "@material-ui/core";
import { MobileLinks } from "../components";

const SingleWorker = () => {
  const { fetchSingleData, funcionario, showExtra, api } = useGlobalContext();
  const { id } = useParams();
  const history = useHistory();

  const { nome, email, data_nascimento, data_admissao, setor, cargo, nivel } =
    funcionario;

  const [name, setName] = useState("");

  useEffect(() => {
    setName(nome);
  }, []);

  function deleteWorkerData() {
    api.delete(`/funcionarios/${id}`);
    history.push("/starter");
  }

  useEffect(() => {
    fetchSingleData(id);
  }, [id]);

  useEffect(() => {
    showExtra();
  }, []);

  return (
    <Wrapper>
      <div className="mobile-links">
        <MobileLinks />
      </div>
      <h2>Dados do Funcionário</h2>
      <div>
        <img src={SglWorker_icn} alt="icon" />
      </div>
      <hr />
      <div>
        <span>Nome:</span>
        <h4>{nome}</h4>
      </div>
      <div>
        <span>E-mail:</span>
        <h4>{email}</h4>
      </div>
      <div>
        <span>Data de Nascimento : </span>
        <h4>{data_nascimento}</h4>
      </div>
      <div>
        <span>Data de Admissão : </span>
        <h4>{data_admissao}</h4>
      </div>
      <div>
        <span>setor:</span>
        <h4>{setor}</h4>
      </div>
      <div>
        <span>cargo:</span>
        <h4>{cargo}</h4>
      </div>
      <div>
        <span>nível:</span>
        <h4>{nivel}</h4>
      </div>
      <div>
        <button
          type="button"
          className="primary-btn primary-btn-2 grow sgl-worker-btn "
          onClick={() => deleteWorkerData()}
        >
          Deletar
        </button>
        <Link to="/updatepage">
          <button
            type="button"
            className="primary-btn primary-btn-2 grow sgl-worker-btn second-btn"
          >
            Atualizar
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: var(--classic-black);
  background: var(--white-smoke);
  position: absolute;
  top: 55px;
  left: 25px;
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

  .mobile-links {
    display: block;
    margin-bottom: 15px;
    position: absolute;
    top: -30px;
    left: 20px;
  }
  .mobile-links ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .mobile-links ul li {
    padding: 10px;
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
    .mobile-links {
      display: none;
    }
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
