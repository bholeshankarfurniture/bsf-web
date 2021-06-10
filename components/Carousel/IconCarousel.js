import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import { iconCarouselData } from "./../../data/iconcaroselData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
  secondaryFontColor,
} from "../../constants/constants";

const IconCarousel = () => {
  return (
    <Container>
      <MainDiv>
        {iconCarouselData.map((item, index) => (
          <Div key={index}>
            <InnerContainer>
              <img src={item.icon} alt={item.title} />
              <h2>{item.title}</h2>
            </InnerContainer>
          </Div>
        ))}
      </MainDiv>
    </Container>
  );
};

export default IconCarousel;

const animationName = keyframes`
  from{
    transform: rotate(0deg);
    border: 3px dashed ${secondaryDarkColor};
  }to{
    transform: rotate(360deg);
    border: 3px dashed ${secondaryDarkColor};
  }

`;
const InnerContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;

  :after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border: 3px solid ${secondaryDarkColor};
    border-radius: 50%;
    transition: border 0.5s;
  }

  img {
    width: 50%;
  }

  h2 {
    margin-top: 0.7rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: ${primaryDarkColor};
  }

  :hover:after {
    cursor: pointer;
    border: 3px dashed ${secondaryDarkColor};
    animation: ${animationName} 7s infinite linear;
    transition: transform 0.5s;
  }

  :hover {
    h2 {
      color: ${secondaryDarkColor};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  display: flex;
  padding: 2.5rem;
  overflow-x: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 640px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

const Div = styled.div`
  margin: 0 1rem;
  border: none;
  border-radius: 50%;
  position: relative;
`;
