import Link from "next/link";
import styled from "styled-components";
import {
  dv_padding,
  mv_padding,
  secondaryColor,
  secondaryDarkColor,
  sectionBgColor,
} from "../constants/constants";
import TopPageSection from "../components/TopPageSection/TopPageSection";
import { Spacer } from "../components/Spacer";

const about = () => {
  return (
    <Container>
      <TopPageSection currentPageName="About Us" />
      <WelcomeSection>
        <img src="/assets/about-img/1.jpg" />
        <Div>
          <h1>Welcome To Bhole Shankar Furniture</h1>
          <p>
            Elit elit enim amet consequat dolor fugiat fugiat. Ipsum aliquip
            eiusmod et est consequat dolore et quis tempor. Non do aliquip ipsum
            ad nulla mollit ipsum sunt. Aute dolor veniam incididunt culpa sint
            ea labore est excepteur. Elit elit enim amet consequat dolor fugiat
            fugiat. Ipsum aliquip eiusmod et est consequat dolore et quis
            tempor. Non do aliquip ipsum ad nulla mollit ipsum sunt. Aute dolor
            veniam incididunt culpa sint ea labore est excepteur.
          </p>

          <Spacer height="2" />
          <p>
            Elit elit enim amet consequat dolor fugiat fugiat. Ipsum aliquip
            eiusmod et est consequat dolore et quis tempor. Non do aliquip ipsum
            ad nulla mollit ipsum sunt. Aute dolor veniam incididunt culpa sint
            ea labore est excepteur.ad nulla mollit ipsum sunt. Aute dolor
            veniam incididunt culpa sint ea labore est excepteur.
          </p>
        </Div>
      </WelcomeSection>
    </Container>
  );
};

export default about;

const Container = styled.div`
  width: 100%;
`;

const WelcomeSection = styled.div`
  padding: ${mv_padding};
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  place-items: center;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    padding: ${dv_padding};
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  img {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      margin-right: 2rem;
    }
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: ${secondaryDarkColor};
  }
`;
