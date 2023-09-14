import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../Card';
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
    <main>
      <ul>
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
       </ul>
    </main>
        
    </>
  )
}