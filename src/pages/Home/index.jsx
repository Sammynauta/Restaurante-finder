import React, {useState} from "react";
import { Container, Pesquisa } from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from '@material/react-material-icon';

import logo from "../../assets/logo.svg";


const Home = () => {
  const [inputValue, setInputValue] = useState('');
  return (
  <Container>
    <Pesquisa>
      <img src={logo} alt="restaurante" />
      <TextField
          label='Pesquisar'
          outlined
          //onTrailingIconSelect={() => this.setState({value: ''})}
          trailingIcon={<MaterialIcon role="button" icon="search"/>}>
          <Input value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
    </Pesquisa>
  </Container>
  )
};

export default Home;
