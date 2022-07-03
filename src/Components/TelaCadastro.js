import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import Button from "./shared/Button";

export default function TelaCadastro() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [confirmaSenha, setConfirmaSenha] = React.useState("");

  const [disabled, setDisabled] = React.useState(false);
  const [corBackgroundInput, setCorBackgroundInput] = React.useState("#ffffff");
  const [carregando, setCarregando] = React.useState(false);

  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    setDisabled(true);
    setCorBackgroundInput("#f2f2f2");
    setCarregando(true);

    if (confirmaSenha === senha) {

      const dadosCadastro = {
        nome,
        email,
        senha
      };

      const promise = axios.post(
        "https://back-my-wallet-jaqueline-caye.herokuapp.com/cadastrar",
        dadosCadastro
      );

      promise
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          alert("Os dados foram inseridos incorretamente. Tente novamente!");
          setEmail("");
          setSenha("");
          setNome("");
          setConfirmaSenha("");
          setDisabled(false);
          setCorBackgroundInput("#ffffff");
          setCarregando(false);
        });
    } else {
      alert("As senhas não conferem. Tente novamente!");
      setSenha("");
      setConfirmaSenha("");
      setDisabled(false);
      setCorBackgroundInput("#ffffff");
      setCarregando(false);
    }
  }

  return (
    <>
      <TituloEstilo>
        <h1>MyWallet</h1>
      </TituloEstilo>
      <FormStyle onSubmit={submitForm} corBackgroundInput={corBackgroundInput}>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          disabled={disabled}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disabled}
          required
        />
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={disabled}
          required
        />
        <input
          type="password"
          name="confirmaSenha"
          id="confirmaSenha"
          placeholder="Confirme a senha"
          value={confirmaSenha}
          onChange={(e) => setConfirmaSenha(e.target.value)}
          disabled={disabled}
          required
        />

        {carregando ? (
          <Button disabled={disabled}>
            <ThreeDots color="#ffffff" height={45} width={80} />
          </Button>
        ) : (
          <Button disabled={disabled}>Cadastrar</Button>
        )}
      </FormStyle>
      <LinkEstilo>
        <Link to="/">
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </LinkEstilo>
    </>
  );
}

const TituloEstilo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 95px 0px 24px 0px;

  h1 {
    color: var(--cor-branca);
    font-size: 32px;
  }
`;

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  input {
    width: 85%;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const LinkEstilo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;

  a {
    text-decoration: none;
    color: var(--cor-branca);
    font-weight: 700;
    font-size: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
