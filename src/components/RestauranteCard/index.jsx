import  Skeleton  from "../Skeleton";
import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import fotoRestaurante from "../../assets/restaurante-fake.png";
import { Restaurante, RestuaranteInfo, Title, Address, PhotoRestaurante } from "./styles";

const RestauranteCard = ({restaurant, onClick}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurante onClick={onClick}>
    <RestuaranteInfo>
     <Title>{restaurant.name}</Title>
     <ReactStars count={5} isHalf  edit={false} value={restaurant.rating} acttiveColor="#e7711c" />
     <Address>{restaurant.vicinity || restaurant.formattedd_address}</Address>
    </RestuaranteInfo>
    <PhotoRestaurante imageLoaded={imageLoaded} src={restaurant.photos ? restaurant.photos[0].getUrl() : fotoRestaurante} alt='fotinho' onLoad={() => setImageLoaded(true)} />
    {!imageLoaded && <Skeleton width='100px' height='100px' /> }
  </Restaurante>
  )
 
};

export default RestauranteCard;
