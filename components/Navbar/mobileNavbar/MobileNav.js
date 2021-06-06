import styled from "styled-components";
import CustomeIcon from "../../customeIcon/CustomeIcon";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { primaryColor, secondaryColor } from "../../../constants/constants";

const MobileNav = ({ isOpen, clickToggle }) => {
  const [isTrue, setisTrue] = useState(false);

  return (
    <MainDiv isOpen={isOpen}>
      <CloseBtn
        onMouseEnter={() => setisTrue(true)}
        onMouseLeave={() => setisTrue(false)}
        onClick={clickToggle}
      >
        {isTrue ? <AiOutlineMinus /> : <MdClose />}
      </CloseBtn>
    </MainDiv>
  );
};

export default MobileNav;

const MainDiv = styled.div`
  width: 350px;
  min-height: 100vh;
  background-color: ${primaryColor};
  padding: 50px 30px;
  z-index: 1001;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  overflow-x: hidden;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-100%)"};

  @media (min-width: 1024px) {
    display: none;
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
