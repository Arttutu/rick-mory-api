import React from "react";
import styled from "styled-components";
import { cor3, font } from "../UI/variaveis";
const CaixaRodape = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${cor3};
  padding: 20px 0px;
`;
const StyleRodape = styled.div`
  font-family: ${font};
  font-size: 1em;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 1em;
  flex-direction: column;
`;
export default function Rodape() {
  return (
    <CaixaRodape>
      <StyleRodape>
        <span>Desenvolvido por @Arthur Gomes dos Santos</span>
        <span>The Rick and Mory API</span>
      </StyleRodape>
    </CaixaRodape>
  );
}
