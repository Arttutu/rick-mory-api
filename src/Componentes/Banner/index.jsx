import React from 'react'
import styled from 'styled-components'
import { font } from '../UI/variaveis'

const StyleBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: 300px;
    margin: 100px 20px;
    >h1{
        font-size: 5em;
        font-family: ${font};
        margin: auto 0;
        
    }
    >p{
        font-size: 3em;
        font-family: ${font};
        margin: auto 0;
        
    }
    @media (max-width: 768px){
        text-align: center;
        margin: 50px 20px;
        >h1{
            font-size: 3em;
        }
        >p{
            font-size: 2em;
        }
        }
        
`
export default function Banner() {
  return (
    <header>
        <StyleBanner>
            <h1>The Rick and Morty Personagens</h1>
            <p>Encontre todos os personagens aqui !</p>
        </StyleBanner>
    </header>
  )
}
