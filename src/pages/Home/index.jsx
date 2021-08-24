import React, { useState } from "react";
import { Container, Pesquisa, Logo, Wrapper, CarouselTitle } from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import restaurante from "../../assets/restaurante-fake.png";
import logo from "../../assets/logo.svg";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
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
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Area</CarouselTitle>
          <Slider {...settings}>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="restaurante" />
            </div>
          </Slider>
        </Pesquisa>
      </Container>
    </Wrapper>
  );
};

export default Home;
