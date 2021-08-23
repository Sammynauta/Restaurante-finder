import React, { useState } from "react";
import { Container, Pesquisa, Logo, Wrapper } from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import logo from "../../assets/logo.svg";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Wrapper>
      <Container>
        <Pesquisa>
          <Logo src={logo} alt="restaurante" />
          <TextField
            label="Buscar Restaurantes"
            outlined
            //onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
        </Pesquisa>
      </Container>
    </Wrapper>
  );
};

export default Home;
