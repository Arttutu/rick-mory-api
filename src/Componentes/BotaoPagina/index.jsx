import React from "react";
import styled from "styled-components";
import { cor2, font } from "../UI/variaveis";

const BotaoStyle = styled.button`
  border: none;
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  font-family: ${font};
  font-weight: bolder;
  color: black;
  cursor: pointer;
`;
const CaixaBotao = styled.div`
  display: flex;
  gap: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default function BotaoPagina({ proxima, anterior }) {
  return (
    <CaixaBotao>
      <BotaoStyle onClick={anterior}>Página Anterior</BotaoStyle>
      <BotaoStyle onClick={proxima}>Próxima Página</BotaoStyle>
    </CaixaBotao>
  );
}
