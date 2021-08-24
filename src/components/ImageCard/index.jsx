import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.photo});
  width: 90px;
  height: 90px;
  border-radius: 8px;
  background-size: cover;
  padding: 6px;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 13px;
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;
