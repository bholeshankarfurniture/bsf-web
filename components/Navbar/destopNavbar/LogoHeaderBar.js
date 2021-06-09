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
      <Container className="bg-white flex justify-between py-5 items-center">
        <div className="w-11/12 m-auto flex justify-between items-center">
          <Logo>
            <Link href="/">
              <a className="text-black font-bold ">Bhole Shankar Furniture</a>
            </Link>
          </Logo>
          <IconsContainer className="grid grid-cols-4 lg:grid-cols-3 lg:divide-x divide-gray-500">
            <IconComponent Icon={SearchIcon} />
            <IconComponent Icon={UserIcon} />
            <IconComponent Icon={ShoppingBagIcon} />
            <MenuIcon1 onClick={clickHandler} />
          </IconsContainer>
        </div>
      </Container>
    </>
  );
};

export default LogoHeaderBar;

const Container = styled.div`
  width: 100%;
  background-color: ${primaryColor};
  z-index: 1000;

  @media (min-width: 1024px) {
    background-color: #fff;
  }
`;

const Logo = styled.div`
  a {
    font-size: 1.5rem;
    line-height: 40px;
    color: ${secondaryColor};
    text-decoration: none;

    @media (min-width: 640px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    @media (min-width: 1024px) {
      color: ${primaryDarkColor};
    }
  }
`;
const IconsContainer = styled.div``;

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
