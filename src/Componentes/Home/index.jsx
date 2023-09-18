import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { cor2 } from "../UI/variaveis";
import Banner from "../Banner";
import Personagens from "../Personagens";
import BotaoPagina from "../BotaoPagina";
import Rodape from "../Rodape";

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
  background-color: ${cor2};
  padding: 50px;
`;

export default function Home() {
  const [personagem, setPersonagem] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => {
        setPersonagem(response.data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API: ", error);
      });
  }, [pagina]);

  const nextPage = () => {
    if (pagina < 42) {
      setPagina(pagina + 1);
    } else {
      setPagina(1);
    }
  };

  const previousPage = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  return (
    <>
      <Banner />
      <StyleMain>
        <Personagens personagem={personagem} />
        <BotaoPagina proxima={nextPage} anterior={previousPage} />
      </StyleMain>
      <Rodape />
    </>
  );
}
