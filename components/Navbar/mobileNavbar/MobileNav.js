import styled from "styled-components";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";
import { primaryColor, secondaryColor } from "../../../constants/constants";
import ListOfNavItems from "../../ListOfNavItems";
import SubUnorderdList from "./NavList/SubUnorderdList";

const MobileNav = ({ isOpen, clickToggle }) => {
  const [isTrue, setisTrue] = useState(false);

  const [isExpand, setIsExpand] = useState(false);

  const expandList = () => {
    setIsExpand(!isExpand);
  };

  return (
    <Main isOpen={isOpen}>
      <MainDiv isOpen={isOpen}>
        <CloseBtn
          onMouseEnter={() => setisTrue(true)}
          onMouseLeave={() => setisTrue(false)}
          onClick={clickToggle}
        >
          {isTrue ? <AiOutlineMinus /> : <MdClose />}
        </CloseBtn>

        <UnOrderList>
          <ListOfNavItems clickToggle={clickToggle} label="Home" path="/" />
          <ListOfNavItems
            clickToggle={clickToggle}
            label="About us"
            path="/aboutus"
          />
          <ListOfNavItems
            label="shop"
            path="#"
            hadList="true"
            expandOnClick={expandList}
          />
          <SubUnorderdList
            clickToggle={clickToggle}
            isExpand={isExpand}
            expandOnClick={expandList}
          />

          <ListOfNavItems
            clickToggle={clickToggle}
            label="Blog"
            path="/bsfBlog"
          />
          <ListOfNavItems
            clickToggle={clickToggle}
            label="Contact Us"
            path="/contactus"
          />
        </UnOrderList>
      </MainDiv>
    </Main>
  );
};

export default MobileNav;

const UnOrderList = styled.ul`
  margin-top: 80px;
`;

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

  scroll-behavior: smooth;
  overflow-y: scroll;
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

  @media (min-width: 1024px) {
    display: none;
  }
`;
