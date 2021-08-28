import Skeleton  from "../Skeleton";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.photo});
  width: 90px;
  height: 90px;
  border-radius: 8px;
  background-size: cover;
  cursor: pointer;
  padding: 6px;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 13px;
`;

const ImageCard = ({ photo, title }) => {
  const[imageLoaded, setImageLoaded] = useState(false)
  
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo])
  return (
    <>
    {imageLoaded ? (
      <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
    ) : <Skeleton width='90px' height='90px' />}
    </>
    
  )
};

export default ImageCard;
