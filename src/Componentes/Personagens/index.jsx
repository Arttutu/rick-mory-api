import React from "react";
import Card from "../Card";
import styled from "styled-components";

const UlStyle = styled.ul`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding-inline-start: 0px;
`;
export default function Personagens({ personagem }) {
  return (
    <UlStyle>
      {personagem.map((personagem) => {
        return (
          <Card
            key={personagem.id}
            img={personagem.image}
            name={personagem.name}
            status={personagem.status}
            species={personagem.species}
            visto={personagem.location.name}
            origem={personagem.origin.name}
          />
        );
      })}
    </UlStyle>
  );
}
