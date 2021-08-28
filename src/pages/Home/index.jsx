import React, { useState } from "react";
import {
  Container,
  Carousel,
  Pesquisa,
  Logo,
  Wrapper,
  CarouselTitle,
  ModalTitle,
  ModalContent,
} from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import restaurante from "../../assets/restaurante-fake.png";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { Card, RestauranteCard, Modal, Map, Loader, Skeleton } from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [abrirModal, setModalAberto] = useState(false);
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalAberto(true);
  }

  return (
    <Wrapper>
      <Container>
        <Pesquisa>
          <Logo src={logo} alt="restaurante" />
          <TextField
            label="Buscar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          {restaurants.lenght > 0 ? (
            <>
              <CarouselTitle>Na sua Area</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <Card
                    key={restaurant.place_id}
                    photo={
                      restaurant.photos
                        ? restaurant.photos[0].getUrl()
                        : restaurante
                    }
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
              /
            </>
          ) : (
            <Loader />
          )}
        </Pesquisa>
        {restaurants.map((restaurant) => (
          <RestauranteCard
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={abrirModal} onClose={() => setModalAberto(!abrirModal)}>
        {restaurantSelected ? (
          <>
          <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>
          {restaurantSelected?.formatted_phone_number}
        </ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>
          {restaurantSelected?.opening_hours?.open_now
            ? "Aberto agora"
            : "Fechado neste momento"}
        </ModalContent>
          </>
        ) : (
          <>
          <Skeleton width='10px' height='10px' />
          <Skeleton width='7px' height='10px' />
          <Skeleton width='5px' height='10px' />
          <Skeleton width='5px' height='10px' />
          </>
        )}
        
      </Modal>
    </Wrapper>
  );
};

export default Home;
