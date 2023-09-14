import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../Card';
import styled from 'styled-components';
import { cor2 } from '../UI/variaveis';
const UlStyle = styled.ul`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: center;

`
const StyleMain = styled.main`
padding: 30px 0px;
  background-color: ${cor2};
`
export default function Home() {
  const [personagem, setPersonagem] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setPersonagem(response.data.results)
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);
  return (
    <>
    <header>
      <h1>Dados Da API</h1>
    </header>
    <StyleMain>
      <UlStyle>
            {personagem.map((personagem) => {
                return(
                    <Card
                        img={personagem.image}
                        name= {personagem.name}
                        status={personagem.status}
                        species ={personagem.species}
                    />
                )   
            })}
       </UlStyle>
    </StyleMain>
        
    </>
  )
}