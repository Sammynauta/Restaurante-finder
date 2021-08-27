import React, { useState } from "react";
import {
  Container,
  Carousel,
  Pesquisa,
  Logo,
  Wrapper,
  CarouselTitle,
} from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import restaurante from "../../assets/restaurante-fake.png";
import logo from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import { Card, RestauranteCard, Modal, Map } from "../../components";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [abrirModal, setModalAberto] = useState(false);
  const [query, setQuery] = useState(null);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue);
    }
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
        </Pesquisa>
        {restaurants.map((restaurant) => (
          <RestauranteCard restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} />
      <Modal open={abrirModal} onClose={() => setModalAberto(!abrirModal)} />
    </Wrapper>
  );
};

export default Home;
