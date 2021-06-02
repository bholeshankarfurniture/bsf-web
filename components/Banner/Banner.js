import styled from "styled-components";
import { secondaryFontColor } from "../../constants/constants";

const Banner = ({ bannerImg, bannerTitle, forSale, isReverse }) => {
  return (
    <BannerContainer>
      <img src={bannerImg} alt="banner-img" />
      {isReverse ? (
        <ContentRight>
          <h1>
            {bannerTitle}
            <br />
            {forSale}
          </h1>
          <p>Great Discounts Here</p>
        </ContentRight>
      ) : (
        <ContentLeft>
          <h1>
            {bannerTitle}
            <br />
            {forSale}
          </h1>
          <p>Great Discounts Here</p>
        </ContentLeft>
      )}
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    transition: transform 0.5s;
  }

  :hover img {
    transform: scale(1.1) rotate(3deg);
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1.5rem;
    color: ${secondaryFontColor};
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const ContentLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const ContentRight = styled.div`
  position: absolute;
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
`;
