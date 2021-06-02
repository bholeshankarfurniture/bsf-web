import ProductCard from "../Cards/ProductCard/ProductCard";
import styled from "styled-components";
import { productData } from "../../data/productsData";
import { Spacer } from "../Spacer";
import AdBanner from "../Banner/AdBanner";

const OurProduct = () => {
  return (
    <>
      <OurProductContainer>
        <InnerContainer>
          {productData.map((item, index) => {
            return (
              <ProductCard
                imgId={item.id}
                key={index}
                productName={item.productName}
                price={item.price}
                oldPrice={item.oldprice}
                isNew={item.isProductNew}
              />
            );
          })}
        </InnerContainer>
      </OurProductContainer>
      <Spacer height="5" />
      <AdBanner />
      <Spacer height="5" />
    </>
  );
};

export default OurProduct;

const OurProductContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 670px) {
    padding: 2rem 5rem;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 3rem;
  row-gap: 3rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
