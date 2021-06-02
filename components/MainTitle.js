import styled from "styled-components";
import { secondaryFontColor } from "../constants/constants";

const MainTitle = ({ title, description }) => {
  return (
    <MainContainer>
      <h2>{title}</h2>
      <p>{description}</p>
    </MainContainer>
  );
};

export default MainTitle;

const MainContainer = styled.div`
  text-align: center;

  h2 {
    font-size: 30px;
    font-weight: bold;

    @media (min-width: 640px) {
      font-size: 32px;
    }

    @media (min-width: 768px) {
      font-size: 40px;
    }
  }

  p {
    display: inline-block;
    margin: auto;
    padding: 1rem;
    color: ${secondaryFontColor};
    font-size: 1.1rem;

    @media (min-width: 640px) {
      width: 500px;
    }

    @media (min-width: 768px) {
    }
  }
`;
