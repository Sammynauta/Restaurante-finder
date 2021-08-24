import React from "react";
import ReactStars from "react-rating-stars-component";
import fotoRestaurante from "../../assets/restaurante-fake.png";
import { Restaurante, RestuaranteInfo, Title, Address, PhotoRestaurante } from "./styles";

const RestauranteCard = () => (
  <Restaurante>
    <RestuaranteInfo>
     <Title>Nome do Lugar</Title>
     <ReactStars count={5} isHalf  edit={false} value={4} acttiveColor="#e7711c" />
     <Address>Endereco</Address>
    </RestuaranteInfo>
    <PhotoRestaurante src={fotoRestaurante} alt='fotinho' />
  </Restaurante>
);

export default RestauranteCard;
