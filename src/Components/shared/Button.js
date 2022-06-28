import styled from "styled-components";

export default function Button({ children }) {
  return (
    <ButtonEstilo>
      <button type="submit">{children}</button>
    </ButtonEstilo>
  );
}

const ButtonEstilo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 85%;
    height: 46px;
    margin-top: 13px;
    background-color: var(--cor-botao);
    color: var(--cor-branca);
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }

  &:hover {
    filter: brightness(0.6);
  }
`;
