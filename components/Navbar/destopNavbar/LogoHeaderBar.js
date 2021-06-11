import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import IconComponent from "./IconComponent";
import MobileNav from "../mobileNavbar/MobileNav";
import {
  primaryColor,
  primaryDarkColor,
  secondaryColor,
} from "../../../constants/constants";

const LogoHeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} clickToggle={clickHandler} />
      <Container>
        <Div>
          <Logo>
            <Link href="/">
              <a>Bhole Shankar Furniture</a>
            </Link>
          </Logo>
          <IconsContainer>
            <IconComponent Icon={SearchIcon} />
            <IconComponent Icon={UserIcon} />
            <IconComponent Icon={ShoppingBagIcon} />
            <MenuIcon1 onClick={clickHandler} />
          </IconsContainer>
        </Div>
      </Container>
    </>
  );
};

export default LogoHeaderBar;

const Container = styled.div`
  width: 100%;
  background-color: ${primaryColor};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  @media (min-width: 1024px) {
    background-color: #fff;
  }
`;

const Div = styled.div`
  width: 91.666667%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  a {
    font-size: 1.5rem;
    line-height: 40px;
    color: ${secondaryColor};
    text-decoration: none;
    font-weight: bold;

    @media (min-width: 640px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    @media (min-width: 1024px) {
      color: ${primaryDarkColor};
    }
  }
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const MenuIcon1 = styled(MenuIcon)`
  height: 1.5rem;
  padding-right: 0.75rem;
  cursor: pointer;
  transition: color 0.5s;
  color: ${secondaryColor};

  :hover {
    color: ${secondaryColor};
  }

  @media (min-width: 640px) {
    height: 1.75rem;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;
