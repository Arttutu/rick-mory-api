import React from 'react'
import styled from 'styled-components'
import { cor1, font } from '../UI/variaveis'

const CardStyle = styled.div`
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
    width:500px;
    height: 200px;
    background-color: ${cor1};
    border-radius: 10px;
    @media (max-width: 768px){
        width: 400px;
        height: 500px;
        flex-direction: column;
        justify-content: space-around;        }
`
const CardImg = styled.img`
    width: 200px;
    height: 100%;
    @media (max-width: 768px){
        width: 100%;
        height: 300px;
  }
`

const CardConteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
`
const Info = styled.div`
    display: flex;
    gap: 0.5em;
    color: #ffffff;
    font-family: ${font};
`
const TituloCard = styled.h2`

    font-weight: bold;
    color: #ffffff;
    font-family: ${font};
`
const DeadAlive = styled.div`
    border-radius: 20%;
    width:20px;
    background-color: ${(props)=> props.status === "Dead" ? "red" : props.status === "unknown" ? "black" : "green"};
`
export default function Card({img, name, status,species}) {
  return (
    <CardStyle>
        <CardImg src={img}/>
        <CardConteudo>
            <TituloCard>{name}</TituloCard>
            <Info>
                <DeadAlive status={status}></DeadAlive>
                <span>{status}</span>
                <span>--</span>
                <span>{species}</span>
            </Info>
        </CardConteudo>
    </CardStyle>
  )
}
