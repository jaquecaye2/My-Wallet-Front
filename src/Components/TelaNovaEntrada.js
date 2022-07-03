import { useContext } from "react";
import Context from "../Context/Context";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Button from "./shared/Button";

export default function TelaNovaEntrada() {
  const { token } = useContext(Context);

  const [valor, setValor] = React.useState("");
  const [descricao, setDescricao] = React.useState("");

  const [disabled, setDisabled] = React.useState(false);
  const [corBackgroundInput, setCorBackgroundInput] = React.useState("#ffffff");
  const [carregando, setCarregando] = React.useState(false);

  const navigate = useNavigate();

  function salvarEntrada(event) {
    event.preventDefault();

    setDisabled(true);
    setCorBackgroundInput("#f2f2f2");
    setCarregando(true);

    const dadosEntrada = {
      valor,
      descricao,
      tipo: "entrada"
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      "https://back-my-wallet-jaqueline-caye.herokuapp.com/registros",
      dadosEntrada,
      config
    );

    promise
      .then((response) => {
        console.log(response.data);
        navigate("/relatorio");
      })
      .catch((error) => {
        console.log(error);
        alert("Os dados foram inseridos incorretamente. Tente novamente!");
        setValor("");
        setDescricao("");
        setDisabled(false);
        setCorBackgroundInput("#ffffff");
        setCarregando(false);
      });
  }

  return (
    <TelaNovaEntradaEstilo>
      <TituloEstilo>
        <h2>Nova Entrada</h2>
        <Link to="/relatorio">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </Link>
      </TituloEstilo>
      <FormEstilo onSubmit={salvarEntrada} corBackgroundInput={corBackgroundInput}>
        <input
          type="number"
          name="valor"
          id="valor"
          placeholder="Valor"
          min="0"
          step="0.01"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          disabled={disabled}
          required
        />
        <input
          type="text"
          name="senha"
          id="descricao"
          placeholder="Descrição"
          minLength="0"
          maxLength="20"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          disabled={disabled}
          required
        />
        {carregando ? (
          <Button disabled={disabled}>
            <ThreeDots color="#ffffff" height={45} width={80} />
          </Button>
        ) : (
          <Button disabled={disabled}>Salvar Entrada</Button>
        )}
        
      </FormEstilo>
    </TelaNovaEntradaEstilo>
  );
}

const TelaNovaEntradaEstilo = styled.div`
  width: 85%;
  margin: auto;
`;

const TituloEstilo = styled.div`
  margin: 25px 0px 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--cor-branca);
    font-size: 26px;
    font-weight: 700;
  }

  ion-icon{
    font-size: 30px;
    color: var(--cor-branca);
    cursor: pointer;
  }
 
`;

const FormEstilo = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    width: 100%;
    height: 58px;
    margin-top: 13px;
    padding-left: 15px;
    border: none;
    border-radius: 5px;
    color: var(--cor-texto);
    font-size: 20px;
    background-color: ${(props) => props.corBackgroundInput};
  }

  &::placeholder {
    color: var(--cor-texto);
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
