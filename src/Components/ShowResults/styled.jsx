import styled from "styled-components";

export const SemResultados = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100vw;
  height: 80vh;
`;
export const TextoP = styled.p`
  text-align: center;
`;

export const ResultCard = styled.div`
  width: 20%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 30rem;
  margin: 2rem;
  background: #a303a1;
  transition: 0.5s filter;
  :hover {
    filter: brightness(0.9);
  }
`;
