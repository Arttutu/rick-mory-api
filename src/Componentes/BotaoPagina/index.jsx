import React from "react";
import styled from "styled-components";

const BotaoStyle = styled.button``;
export default function BotaoPagina({ proxima, anterio }) {
  return (
    <div>
      <BotaoStyle onClick={anterio}>Página Anterior</BotaoStyle>
      <BotaoStyle onClick={proxima}>Próxima Página</BotaoStyle>
    </div>
  );
}
