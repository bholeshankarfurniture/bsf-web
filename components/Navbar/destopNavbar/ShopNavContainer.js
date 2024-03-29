import styled from "styled-components";
import { typesOfSofas } from "../../../data/productsData";
import NavSliderContent from "./NavSliderContent";
import AdBanner from "../../Banner/AdBanner";
import { Spacer } from "../../Spacer";
import { primaryColor } from "../../../constants/constants";

const ShopNavContainer = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <Container>
      <MainContent onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Div>
          <NavSliderContent title="Sofas" data={typesOfSofas} />
          <NavSliderContent title="Dinning Tables" data={typesOfSofas} />
          <NavSliderContent title="Beds" data={typesOfSofas} />
          <NavSliderContent title="Mattresses" data={typesOfSofas} />
          <NavSliderContent title="Mattresses" data={typesOfSofas} />
          <NavSliderContent title="Mattresses" data={typesOfSofas} />
        </Div>

        <Spacer height="2" />
        <AdBanner />
      </MainContent>
    </Container>
  );
};

export default ShopNavContainer;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;
const MainContent = styled.div`
  width: 90vw;
  height: auto;
  background-color: ${primaryColor};
  padding: 2rem;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.8);
`;

const AdContainer = styled.div``;
