import { useContext } from "react";
import Context from "../Context/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./shared/Button";

export default function TelaLogin() {
  const { token, setToken } = useContext(Context);

  return (
    <>
      <TituloEstilo>
        <h1>MyWallet</h1>
      </TituloEstilo>
      <FormEstilo>
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <input type="password" name="senha" id="senha" placeholder="Senha" />
        <Link to="/relatorio"><Button>Entrar</Button></Link>
      </FormEstilo>
      <LinkEstilo>
        <Link to="/cadastro">
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </LinkEstilo>
    </>
  );
}

const TituloEstilo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 159px 0px 24px 0px;

  h1 {
    color: var(--cor-branca);
    font-size: 32px;
  }
`;

const FormEstilo = styled.form`
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
  }

  &::placeholder {
    color: var(--cor-texto);
  }
`;

const LinkEstilo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;

    a{
        text-decoration: none;
        color: var(--cor-branca);
        font-weight: 700;
        font-size: 15px;

        &:hover {
      text-decoration: underline;
    }
    }

`