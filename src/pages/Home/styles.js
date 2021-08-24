import styled from "styled-components";
import Slider from "react-slick";


export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 380px;
  height: 100vh;
  overflow-y: auto;
`;

export const Pesquisa = styled.section`
  display:flex;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular} ;
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin: 4px;
  }
`;
