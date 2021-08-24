import styled from "styled-components";

export const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 8px;
  background-color: #ffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left: 5px solid ${(props) => props.theme.colors.primary};
  }
`;

export const RestuaranteInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 29px;
`;

export const Address= styled.span `
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  margin: 10px 0;
  line-height: 19px;
`;
export const PhotoRestaurante= styled.img `
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;
