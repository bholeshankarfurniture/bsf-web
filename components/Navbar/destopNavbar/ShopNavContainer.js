import styled from "styled-components";
import { typesOfSofas } from "../../../data/productsData";
import NavSliderContent from "./NavSliderContent";
import AdBanner from "../../Banner/AdBanner";
import { Spacer } from "../../Spacer";

const ShopNavContainer = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <Container className="hidden lg:block ">
      <MainContent onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="flex justify-between">
          <NavSliderContent title="Sofas" data={typesOfSofas} />
          <NavSliderContent title="Dinning Tables" data={typesOfSofas} />
          <NavSliderContent title="Beds" data={typesOfSofas} />
          <NavSliderContent title="Mattresses" data={typesOfSofas} />
          <NavSliderContent title="Mattresses" data={typesOfSofas} />
          <NavSliderContent title="Mattresses" data={typesOfSofas} />
        </div>

        <Spacer height="2" />
        <AdBanner />
      </MainContent>
    </Container>
  );
};

export default ShopNavContainer;

const Container = styled.div`
  width: 100%;
  height: auto;
`;
const MainContent = styled.div`
  width: 90vw;
  height: auto;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.8);
`;

const AdContainer = styled.div``;
