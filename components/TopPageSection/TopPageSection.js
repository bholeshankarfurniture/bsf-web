import Link from "next/link";
import styled from "styled-components";
import { Spacer } from "../Spacer";
import {
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
  sectionBgColor,
} from "../../constants/constants";

const TopPageSection = ({ currentPageName }) => {
  return (
    <Container>
      <AboutSection>
        <h1>{currentPageName}</h1>
        <Div>
          <Link href="/">
            <a>Home </a>
          </Link>
          <Spacer width="0.3" />
          <p> / {currentPageName}</p>
        </Div>
      </AboutSection>
    </Container>
  );
};

export default TopPageSection;

const Container = styled.div`
  width: 100%;
  padding: 5rem;
  background: ${sectionBgColor};
`;

const Div = styled.div`
  display: flex;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 670px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${primaryDarkColor};
    font-weight: 700;

    @media (min-width: 767px) {
      font-size: 2rem;
    }
  }

  a,
  p {
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  p {
    color: ${primaryDarkColor};
  }

  a {
    color: ${secondaryDarkColor};
    position: relative;
  }

  a:before {
    content: "";
    position: absolute;
    width: 0%;
    top: 110%;
    opacity: 0;
    left: 0;
    height: 2px;
    border-bottom: 2px solid ${secondaryDarkColor};
    transition: width 0.5s, opacity 0.5s linear;
  }

  a:hover:before {
    width: 100%;
    opacity: 1;
  }
`;
