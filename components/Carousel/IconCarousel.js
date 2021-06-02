import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import { iconCarouselData } from "./../../data/iconcaroselData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { secondaryColor, secondaryFontColor } from "../../constants/constants";

const IconCarousel = () => {
  return (
    <Container>
      <div className="flex px-10 sm:px-20 overflow-x-scroll scrollbar-hide">
        {iconCarouselData.map((item, index) => (
          <Div key = {index}>
            <InnerContainer>
              <img src={item.icon} alt={item.title} />
              <h2>{item.title}</h2>
            </InnerContainer>
          </Div>
        ))}
      </div>
    </Container>
  );
};

export default IconCarousel;

const animationName = keyframes`
  from{
    transform: rotate(0deg);
    border: 3px dashed ${secondaryColor};
  }to{
    transform: rotate(360deg);
    border: 3px dashed ${secondaryColor};
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
    border: 3px solid ${secondaryFontColor};
    border-radius: 50%;
  }

  img {
    width: 50%;
  }

  h2 {
    margin-top: 0.7rem;
    font-weight: bold;
    font-size: 1.2rem;
    color: ${secondaryFontColor};
  }

  :hover:after {
    cursor: pointer;
    border: 3px dashed ${secondaryColor};
    animation: ${animationName} 0.5s infinite;
  }

  :hover {
    h2 {
      color: ${secondaryColor};
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

const Div = styled.div`
  margin: 0 1rem;
  border: none;
  border-radius: 50%;
  position: relative;
`;
