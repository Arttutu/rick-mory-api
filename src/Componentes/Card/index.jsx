import React from "react";
import styled from "styled-components";
import { cor1, font } from "../UI/variaveis";

const CardStyle = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: space-between;
  width: 500px;
  height: auto;
  background-color: ${cor1};
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 300px;
    height: 500px;
    padding-bottom: 50px;
    flex-direction: column;
    justify-content: space-around;
  }
`;
const CardImg = styled.img`
  width: 200px;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
`;
const Info = styled.div`
  display: flex;
  gap: 0.5em;
  color: #ffffff;
  font-family: ${font};
`;
const TituloCard = styled.h2`
  font-weight: bold;
  color: #ffffff;
  font-family: ${font};
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
`;
export default function Card({ img, name, status, species }) {
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
        <TituloSecundario>First seen in:</TituloSecundario>
      </CardConteudo>
    </CardStyle>
  );
}
