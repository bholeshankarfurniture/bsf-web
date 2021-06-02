import styled from "styled-components";
import Banner from "./Banner";
import { bannerData } from "../../data/productsData";

const AdBanner = () => {
  return (
    <AdContainer>
      {bannerData.map((item, index) => (
        <Banner
          key={index}
          bannerImg={item.bannerImg}
          bannerTitle={item.title}
          forSale={item.forSale}
          isReverse={item.isReverse}
        />
      ))}
    </AdContainer>
  );
};

export default AdBanner;

const AdContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;

  @media (min-width: 640px) {
    padding: 2rem 5rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
