import React, { useContext } from "react";
import Context from "../Context/Context";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registro({ registro }) {

  let valorNumber = parseFloat(registro.valor)

  return (
    <div>
      <div>
        <p>{registro.dia}</p>
        <h3>{registro.descricao}</h3>
      </div>
      <p className={registro.tipo}>R${valorNumber.toFixed(2)}</p>
    </div>
  );
}

export default function TelaRelatorio() {
  const { token } = useContext(Context);

  const [registros, setRegistros] = React.useState([]);

  let saldo = 0;
  const [situacaoSaldo, setSituacaoSaldo] = React.useState("#03AC00");
  const [saldoFinal, setSaldoFinal] = React.useState(0);

  const navigate = useNavigate();

  function renderizarRegistros() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get("http://localhost:5000/registros", config);

    promise
      .then((response) => {
        setRegistros(response.data);

        const arrayAuxiliar = response.data;

        for (let i = 0; i < arrayAuxiliar.length; i++) {
          if (arrayAuxiliar[i].tipo === "entrada") {
            saldo += parseFloat(arrayAuxiliar[i].valor);
          } else {
            saldo -= parseFloat(arrayAuxiliar[i].valor);
          }
        }

        setSaldoFinal(saldo);

        if (saldo < 0) {
          setSituacaoSaldo("#C70000");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete("http://localhost:5000/sair", config);

    promise
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Os dados foram inseridos incorretamente. Tente novamente!");
      });
    
  }

  React.useEffect(() => {
    renderizarRegistros();
  }, []);

  return (
    <TelaRelatorioEstilo>
      <Cabecalho>
        <h2>Olá, Fulano</h2>
        <ion-icon name="log-out-outline" onClick={logout}></ion-icon>
      </Cabecalho>

      {registros.length === 0 ? (
        <TelaRegistros2>
          <Paragrafo>
            <p>Não há registros de entrada ou saída</p>
          </Paragrafo>
        </TelaRegistros2>
      ) : (
        <>
          <TelaRegistros>
            {registros.map((registro, index) => (
              <Registro key={index} registro={registro} />
            ))}
          </TelaRegistros>
          <CaixaSaldo situacaoSaldo={situacaoSaldo}>
            <h4>SALDO</h4>
            <p>R${saldoFinal.toFixed(2)}</p>
          </CaixaSaldo>
        </>
      )}
      <TelaEntradaeSaida>
        <div>
          <Link to="/novaEntrada">
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Nova entrada</p>
          </Link>
        </div>
        <div>
          <Link to="/novaSaida">
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>Nova saída</p>
          </Link>
        </div>
      </TelaEntradaeSaida>
    </TelaRelatorioEstilo>
  );
}

const TelaRelatorioEstilo = styled.div`
  height: 100%;
  width: 85%;
  margin: auto;
  overflow-y: hidden;
`;

const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 25px;

  h2 {
    color: var(--cor-branca);
    font-size: 26px;
    font-weight: 700;
  }

  ion-icon {
    font-size: 28px;
    color: var(--cor-branca);
    cursor: pointer;
  }
`;

const TelaRegistros = styled.div`
  background-color: var(--cor-branca);
  border-radius: 5px 5px 0px 0px;
  height: 60%;
  padding: 23px 15px 0px 15px;
  overflow-y: scroll;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    height: 35px;

    div {
      p {
        color: var(--cor-data);
        margin-right: 10px;
      }
    }

    p.entrada {
      color: var(--cor-entrada);
    }

    p.saida {
      color: var(--cor-saida);
    }
  }
`;

const CaixaSaldo = styled.div`
  background-color: var(--cor-branca);
  width: 100%;
  height: 50px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  z-index: 1;
  border-radius: 0px 0px 5px 5px;

  h4 {
    font-weight: bold;
  }

  p {
    color: ${(props) => props.situacaoSaldo};
  }
`;

const TelaEntradaeSaida = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 13px 0px;

  div {
    background-color: var(--cor-botao);
    width: 48%;
    height: 115px;
    border-radius: 5px;
    color: var(--cor-branca);
    padding: 12px;
    cursor: pointer;

    a {
      text-decoration: none;
      color: var(--cor-branca);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ion-icon {
        font-size: 22px;
      }

      p {
        font-weight: bold;
        font-size: 17px;
        width: 30%;
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

const TelaRegistros2 = styled.div`
  background-color: var(--cor-branca);
  border-radius: 5px;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paragrafo = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: var(--cor-texto);
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;
