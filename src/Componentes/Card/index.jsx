import React from "react";
import styled from "styled-components";
import { cor1, font, font2 } from "../UI/variaveis";

const CardStyle = styled.div`
  display: flex;
  width: 700px;
  height: 300px;
  gap: 2em;
  background-color: ${cor1};
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 300px;
    gap: 1em;
    height: auto;
    margin-bottom: 10px;
    flex-direction: column;
  }
`;
const CardImg = styled.img`
  width: 300px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;
const CardConteudo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
    padding: 20px;
    gap: 0.5em;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: left;
  gap: 0.5em;
  color: #ffffff;
  font-family: ${font};
  > span {
    font-size: 1.3em;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const TituloCard = styled.h2`
  font-weight: bold;
  color: #ffffff;
  font-size: 2em;
  font-family: ${font2};
`;
const DeadAlive = styled.div`
  border-radius: 100%;
  width: 25px;
  background-color: ${(props) =>
    props.status === "Dead"
      ? "red"
      : props.status === "unknown"
      ? "black"
      : "green"};
`;

const TituloSecundario = styled.h3`
  color: #ffffff;
  font-family: ${font};
  font-size: 1.4em;
`;
const Lugares = styled.span`
  color: #ffffff;
  font-family: ${font};
  font-weight: 900;
  font-size: 1em;
`;
export default function Card({ img, name, status, species, origem, visto }) {
  return (
    <CardStyle>
      <CardImg src={img} />
      <CardConteudo>
        <TituloCard>{name}</TituloCard>
        <Info>
          <DeadAlive status={status}></DeadAlive>
          <span>{status}</span>
          <span>--</span>
          <span>{species}</span>
        </Info>
        <TituloSecundario>Last known location:</TituloSecundario>
        <Lugares>{visto}</Lugares>
        <TituloSecundario>First seen in:</TituloSecundario>
        <Lugares>{origem}</Lugares>
      </CardConteudo>
    </CardStyle>
  );
}
