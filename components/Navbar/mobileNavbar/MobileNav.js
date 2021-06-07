import styled from "styled-components";
import CustomeIcon from "../../customeIcon/CustomeIcon";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { primaryColor, secondaryColor } from "../../../constants/constants";

const MobileNav = ({ isOpen, clickToggle }) => {
  const [isTrue, setisTrue] = useState(false);

  return (
    <Main isOpen={isOpen} onClick={clickToggle}>
      <MainDiv isOpen={isOpen}>
        <CloseBtn
          onMouseEnter={() => setisTrue(true)}
          onMouseLeave={() => setisTrue(false)}
          onClick={clickToggle}
        >
          {isTrue ? <AiOutlineMinus /> : <MdClose />}
        </CloseBtn>
      </MainDiv>
    </Main>
  );
};

export default MobileNav;

const MainDiv = styled.div`
  width: 270px;
  min-height: 100vh;
  background-color: ${primaryColor};
  padding: 50px 30px;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.5s;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-100%)"};

  @media (min-width: 1024px) {
    display: none;
  }

  @media (min-width: 648px) {
    min-width: 350px;
  }
`;

const CloseBtn = styled.div`
  font-size: 25px;
  color: #fff;
  height: 40px;
  width: 40px;
  display: grid;
  place-items: center;
  border-radius: 50px;
  cursor: pointer;
  background-color: ${secondaryColor};
  transition: 0.5s linear;
  position: absolute;
  right: 30px;
`;

const Main = styled.div`
  z-index: 1000;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ isOpen }) =>
    isOpen ? "rgba(0,0,0,0.4)" : "transparent"};
`;
