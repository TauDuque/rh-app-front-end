import React, { useEffect, useContext, useReducer } from "react";
import styled from "styled-components";

const Workers = () => {
  return (
    <Wrapper>
      <table>
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
        <tr>
          <td>Jonas</td>
          <td>joninha@gmail.com</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  table {
    width: 100%;
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
    font-size: 10px;
    text-align: center;
    padding: 10px;
    border: 1px solid;
    background: var(--clr-grey-2);
    border-collapse: collapse;
  }

  @media (min-width: 992px) {
    background: var(--clr-grey);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 90%;
    width: 65%;
    margin-left: 15px;
  }
`;

export default Workers;
