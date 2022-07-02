import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TelaRelatorio() {
  return (
    <TelaRelatorioEstilo>
      <Cabecalho>
        <h2>Olá, Fulano</h2>
        <ion-icon name="log-out-outline"></ion-icon>
      </Cabecalho>
      <TelaRegistros>
        <div>
          <div>
            <p>30/11</p>
            <h3>Almoço mãe</h3>
          </div>
          <p className="saida">39,90</p>
        </div>
        <div>
          <div>
            <p>27/11</p>
            <h3>Mercado</h3>
          </div>
          <p className="saida">542,54</p>
        </div>
        <div>
          <div>
            <p>26/11</p>
            <h3>Compras churrasco</h3>
          </div>
          <p className="saida">67,60</p>
        </div>
        <div>
          <div>
            <p>20/11</p>
            <h3>Empréstimo Maria</h3>
          </div>
          <p className="entrada">500,00</p>
        </div>
        <div>
          <div>
            <p>30/11</p>
            <h3>Almoço mãe</h3>
          </div>
          <p className="saida">39,90</p>
        </div>
        <div>
          <div>
            <p>27/11</p>
            <h3>Mercado</h3>
          </div>
          <p className="saida">542,54</p>
        </div>
        <div>
          <div>
            <p>26/11</p>
            <h3>Compras churrasco</h3>
          </div>
          <p className="saida">67,60</p>
        </div>
        <div>
          <div>
            <p>20/11</p>
            <h3>Empréstimo Maria</h3>
          </div>
          <p className="entrada">500,00</p>
        </div>
        <div>
          <div>
            <p>30/11</p>
            <h3>Almoço mãe</h3>
          </div>
          <p className="saida">39,90</p>
        </div>
        <div>
          <div>
            <p>27/11</p>
            <h3>Mercado</h3>
          </div>
          <p className="saida">542,54</p>
        </div>
        <div>
          <div>
            <p>26/11</p>
            <h3>Compras churrasco</h3>
          </div>
          <p className="saida">67,60</p>
        </div>
        <div>
          <div>
            <p>20/11</p>
            <h3>Empréstimo Maria</h3>
          </div>
          <p className="entrada">500,00</p>
        </div>
        <div>
          <div>
            <p>30/11</p>
            <h3>Almoço mãe</h3>
          </div>
          <p className="saida">39,90</p>
        </div>
        <div>
          <div>
            <p>27/11</p>
            <h3>Mercado</h3>
          </div>
          <p className="saida">542,54</p>
        </div>
        <div>
          <div>
            <p>26/11</p>
            <h3>Compras churrasco</h3>
          </div>
          <p className="saida">67,60</p>
        </div>
        <div>
          <div>
            <p>20/11</p>
            <h3>Empréstimo Maria</h3>
          </div>
          <p className="entrada">500,00</p>
        </div>
        <div>
          <div>
            <p>15/11</p>
            <h3>Salário</h3>
          </div>
          <p className="entrada">3000,00</p>
        </div>
        <div className="saldo">
          <h4>SALDO</h4>
          <p>2849,96</p>
        </div>
      </TelaRegistros>
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
  border-radius: 5px;
  height: 65%;
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

  div.saldo {
    background-color: var(--cor-branca);
    position: sticky;
    width: 100%;
    height: 50px;
    bottom: 0;
    z-index: 1;

    h4 {
      font-weight: bold;
    }

    p {
      color: var(--cor-entrada);
    }
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
  }
`;
