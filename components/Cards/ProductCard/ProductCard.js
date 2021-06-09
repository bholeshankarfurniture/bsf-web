import styled from "styled-components";
import { useState } from "react";
import {
  lightPrimaryFontColor,
  primaryDarkColor,
  secondaryColor,
  secondaryDarkColor,
} from "../../../constants/constants";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdZoomOutMap, MdCompareArrows } from "react-icons/md";

import CustomeIcon from "../../customeIcon/CustomeIcon";
import { Spacer } from "../../Spacer";
import { Button } from "../../Button/Button";

const ProductCard = ({ isNew, imgId, productName, price, oldPrice }) => {
  const [isTrue, setIsTrue] = useState(false);

  const displayIcons = () => {
    setIsTrue(true);
  };

  const hideIcons = () => {
    setIsTrue(false);
  };

  return (
    <CardContainer onMouseEnter={displayIcons} onMouseLeave={hideIcons}>
      <Img src={`/assets/product-img/${imgId}.jpg`} alt="product-img" />
      <Div>
        <h2>{productName}</h2>
        <h3>
          {price} <span> {oldPrice}</span>
        </h3>
      </Div>

      <TagBtn>
        {isNew && (
          <Button
            width="44"
            height="26"
            opacityOnHover="1"
            cursor="default"
            bRadius="5"
          >
            New
          </Button>
        )}
      </TagBtn>

      <OverLayContainer>
        <CustomeIcon
          bgColor="#fff"
          iconColorOnHover="#fff"
          padding="0.8"
          Icon={AiOutlineHeart}
          mediaURL="#"
        />

        <DisplayOnHover isTrue={isTrue}>
          <Spacer height="1" />
          <CustomeIcon
            bgColor="#fff"
            iconColorOnHover="#fff"
            padding="0.8"
            Icon={MdZoomOutMap}
            mediaURL="#"
          />
          <Spacer height="1" />
          <CustomeIcon
            bgColor="#fff"
            iconColorOnHover="#fff"
            padding="0.8"
            Icon={MdCompareArrows}
            mediaURL="#"
          />
        </DisplayOnHover>
      </OverLayContainer>
    </CardContainer>
  );
};

export default ProductCard;

const TagBtn = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const DisplayOnHover = styled.div`
  transition: transform 0.5s, opacity 0.5s linear;
  opacity: 1;

  @media (min-width: 900px) {
    transform: ${({ isTrue }) =>
      isTrue ? "translateY(0%)" : "translateY(30%)"};
    opacity: ${({ isTrue }) => (isTrue ? "1" : "0")};
  }
`;

const OverLayContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Div = styled.div`
  padding: 1rem 0;

  span {
    text-decoration: line-through;
    color: gray;
  }

  h2,
  h3 {
    color: ${lightPrimaryFontColor};
    font-weight: 500;
  }

  h2 {
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-bottom: 1rem;
    display: inline-block;
    transition: color 0.5s ease;
    color: ${secondaryDarkColor};
    font-weight: 700;

    :hover {
      color: ${secondaryColor};
      cursor: pointer;
    }
  }

  h3 {
    font-size: 1.2rem;
    color: ${primaryDarkColor};
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  border: none;
  overflow: hidden;
  text-align: center;
  margin: 0;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;
