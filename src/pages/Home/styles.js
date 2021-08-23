import styled from "styled-components";

export const Container  = styled.aside `
  background-color: ${(props) => props.theme.colors.background};
  width: 380px;
  height: 100vh;
  overflow-y: auto;
`;

export const Pesquisa = styled.section`
  display:flex;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;
