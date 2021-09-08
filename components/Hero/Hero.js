import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { heroSliderData } from "../../data/heroSliderData";
import { Button } from "../Button/Button";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import {
  secondaryFontColor,
  secondaryColor,
  primaryDarkColor,
  secondaryDarkColor,
  sectionBgColor,
} from "../../constants/constants";

import Slide from "react-reveal/Slide";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [toggle, setToggle] = useState(false);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onEnter = () => {
    setToggle(true);
  };

  const onLeave = () => {
    setToggle(false);
  };

  return (
    <HeroSection onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <HeroWrapper>
        {heroSliderData.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroContent>
                    <Slide bottom>
                      <h2>New Products</h2>
                    </Slide>
                    <Slide bottom>
                      <h1>{slide.title}</h1>
                    </Slide>
                    <Slide bottom>
                      <p>{slide.desciption}</p>
                    </Slide>

                    <BtnContainer>
                      <Slide bottom>
                        <Button>{slide.label}</Button>
                      </Slide>
                    </BtnContainer>
                  </HeroContent>
                  <HeroImgContainer>
                    <Slide bottom>
                      <HeroImage src={slide.img} alt={slide.alt} />
                    </Slide>
                  </HeroImgContainer>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}

        <SliderButtons>
          <PrevArrow ishover={toggle} onClick={prevSlide} />
          <NextArrow ishover={toggle} onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${sectionBgColor};

  @media (min-width: 640px) {
    height: 60vh;
  }

  @media (min-width: 768px) {
    height: 70vh;
  }

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 640px) {
    min-height: 60vh;
    height: 60vh;
  }

  @media (min-width: 768px) {
    min-height: 70vh;
    height: 70vh;
  }

  @media (min-width: 1024px) {
    min-height: 100vh;
    height: 100vh;
  }
`;

const HeroSlide = styled.div`
  padding-top: 100px;
`;
const HeroSlider = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 5rem;
  padding: 0 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const HeroContent = styled.div`
  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${secondaryDarkColor};
  }

  h1 {
    font-size: 2.7rem;
    font-weight: bold;
    color: ${primaryDarkColor};
    margin-bottom: 1rem;

    @media screen and (max-width: 767px) {
      font-size: 40px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 52px;
    }

    @media (min-width: 1024px) {
      font-size: 72px;
    }
  }

  p {
    color: ${secondaryFontColor};
    margin-bottom: 2rem;
  }
`;

const BtnContainer = styled.div`
  margin-bottom: 2rem;
`;
const HeroImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroImage = styled.img`
  width: 100%;
  @media (min-width: 648px) {
  }
`;

const ArrowButtons = css`
  width: 50px;
  height: 50px;
  color: ${secondaryColor};
  cursor: pointer;
  background-color: #fff;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: background-color 0.5s, transform 0.5s;

  :hover {
    background-color: ${secondaryColor};
    color: #fff;
    transform: scale(1.05);
  }
`;
const SliderButtons = styled.div`
  bottom: 50px;
  right: 20px;
  display: flex;
  z-index: 10;
`;
const PrevArrow = styled(IoArrowBack)`
  ${ArrowButtons};
  position: absolute;
  left: 20px;
  transition: transform 0.5s, opacity 0.5s linear;
  transform: ${({ ishover }) =>
    ishover ? "translatex(0%)" : "translatex(-110%)"};
  opacity: ${({ ishover }) => (ishover ? "1" : "0")};
`;
const NextArrow = styled(IoArrowForward)`
  ${ArrowButtons};
  right: 20px;
  transition: transform 0.5s, opacity 0.5s linear;
  transform: ${({ ishover }) =>
    ishover ? "translatex(0%)" : "translatex(110%)"};
  opacity: ${({ ishover }) => (ishover ? "1" : "0")};
`;
