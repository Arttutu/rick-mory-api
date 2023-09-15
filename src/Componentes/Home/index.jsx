import React, { useEffect, useState } from 'react'
import axios from "axios"

import styled from 'styled-components';
import { cor2 } from '../UI/variaveis';
import Banner from '../Banner';
import Personagens from '../Personagens';

const StyleMain = styled.main`
  background-color: ${cor2};
  padding: 30px;

`
export default function Home() {
  const [personagem, setPersonagem] = useState([]);
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        setPersonagem(response.data.results)
      })
      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);
  return (
    <>
  
      <Banner />
      <StyleMain>
        <Personagens personagem={personagem}/>
      </StyleMain>
        
    </>
  )
}