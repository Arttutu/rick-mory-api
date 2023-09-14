import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width:600px;
    height: 200px;
    background-color: #3c3e44;
    border-radius: 5px;
`
const CardImg = styled.img`
    width: 200px;
    height: 100%;
`
const CardConteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 0 auto;
`
const Info = styled.div`
    display: flex;
    gap: 1em;
`
export default function Card({img, name, status,species}) {
  return (
    <CardStyle>
        <CardImg src={img}/>
        <CardConteudo>
            <h2>{name}</h2>
            <Info>
                <span>{status}</span>
                <span>{species}</span>
            </Info>
           
       
          
        </CardConteudo>
    </CardStyle>
  )
}
