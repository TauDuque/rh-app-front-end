import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import moment from "moment";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MobileLinks, Loading } from "../components";

const Workers = () => {
  const { funcionarios, showExtra, fetchData } = useGlobalContext();
  const [page, setPage] = useState(0);

  useEffect(() => {
    showExtra();
    fetchData();
  }, []);

  const data = funcionarios[page];

  function goFoward() {
    if (page > funcionarios.length - 2) {
      setPage(0);
    } else setPage(page + 1);
  }

  function goBack() {
    if (page <= 0) {
      setPage(funcionarios.length - 1);
    } else setPage(page - 1);
  }

  return (
    <Wrapper>
      <div className="mobile-links">
        <MobileLinks />
      </div>
      <div className="table-height">
        <table>
          <thead>
            <tr className="table-headers">
              <th>Nome</th>
              <th>E-mail</th>
              <th>Nascimento</th>
              <th>Admissão</th>
              <th>Setor</th>
              <th>Cargo</th>
              <th>Nível</th>
              <th>Data Insert</th>
              <th>Data Update</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((item, index) => {
                const {
                  id,
                  nome,
                  email,
                  data_nascimento,
                  data_admissao,
                  setor,
                  cargo,
                  nivel,
                  audit_data_insert,
                  audit_data_update,
                } = item;
                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/workers/${id}`}>{nome}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>{email}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>{data_nascimento}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>{data_admissao}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>{setor}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>{cargo}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>{nivel}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>{audit_data_insert}</Link>
                    </td>
                    <td>
                      <Link to={`/workers/${id}`}>
                        {audit_data_update &&
                          moment(audit_data_update).format("MM/DD/YYYY HH:mm")}
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <Loading />
            )}
          </tbody>
        </table>
      </div>
      <div className="page-btn-container">
        <button className="page-btn" type="button" onClick={() => goBack()}>
          <BiLeftArrowAlt />
        </button>
        <button className="page-btn" type="button" onClick={() => goFoward()}>
          <BiRightArrowAlt />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  background: rgb(230,227,227);
  background: linear-gradient(138deg, rgba(230,227,227,1) 0%, rgba(232,232,232,1) 50%, rgba(248,243,255,1)100%);
  flex-direction: column;
  border-radius: 2px;
  table {
    width: 100%;
  }
  a {
    color: var(--classic-black);
  }
  .mobile-links {
    display: block;
    margin-bottom: 15px;
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
  table {
    margin-bottom: 10px;
  }
  .table-height {
    min-height: 495px;
  }

  .table-headers th {
    font-size: 14px;
    text-align: center;
    padding: 8px;
    border: 1px solid;
    background: var(--clr-blue);
    border-collapse: collapse;
  }

  table td {
    font-size: 12px;
    text-align: center;
    padding: 11px;
    border: 1px solid;
    background: var(--clr-grey-2);
    border-collapse: collapse;
    cursor: pointer;
    max-height: 15px;
  }

  table tr {
    max-height: 15px;
  }

  td:hover {
    background: var(--clr-white);
  }

  .page-btn-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  .page-btn {
    display: flex;
    padding: 5px;
    width: 70px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    background: rgb(230,227,227);
    background: linear-gradient(138deg, rgba(230,227,227,1) 0%, rgba(232,232,232,1) 50%, rgba(248,243,255,1) 100%);
    display: flex;
    flex-direction: column;
    padding: 5px;
    justify-content: center;
    align-items: flex-start;
    height: 85%;
    width: 65%;
    margin-left: 15px;
    .mobile-links {
      display: none;
    }
  }
  }
`;

export default Workers;
