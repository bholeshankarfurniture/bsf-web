import Link from "next/link";
import { useState } from "react";
import DefaultMessageBar from "./DefaultMessageBar";
import LogoHeaderBar from "./LogoHeaderBar";
import styled from "styled-components";
import { primaryColor } from "../../../constants/constants";
import ShopNavContainer from "./ShopNavContainer";
import MobileNav from "../mobileNavbar/MobileNav";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const open = () => {
    setToggle(true);
  };

  const close = () => {
    setToggle(false);
  };

  return (
    <>
      <DefaultMessageBarContainer>
        <DefaultMessageBar />
      </DefaultMessageBarContainer>

      <LogoHeaderBarContainer className="sticky top-0 lg:relative">
        <LogoHeaderBar />
      </LogoHeaderBarContainer>

      <Container className="hidden lg:block">
        <MainContainer>
          <Nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/aboutus">
              <a>About Us</a>
            </Link>
            <Link href="#">
              <a
                onMouseEnter={open}
                onMouseLeave={close}
                className="display_nav"
              >
                Shop
              </a>
            </Link>
            <Link href="/bsfBlog">
              <a>Blog</a>
            </Link>
            <Link href="/contactus">
              <a>Contact Us</a>
            </Link>
          </Nav>
          <DropDownContainer toggle={toggle}>
            <ShopNavContainer onMouseEnter={open} onMouseLeave={close} />
          </DropDownContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default Navbar;

const DefaultMessageBarContainer = styled.div`
  z-index: 999;
  position: relative;
`;
const LogoHeaderBarContainer = styled.div`
  z-index: 999;
  width: 100%;
`;

const Container = styled.div`
  z-index: 999;
  position: sticky;
  top: 0;
  transition: all 0.5s ease-out;
`;

const MainContainer = styled.div`
  z-index: 999;
  width: 100%;
  display: grid;
  place-items: center;
  background-color: ${primaryColor};
`;

const Nav = styled.nav`
  a {
    color: #fff;
    font-weight: 400;
    display: inline-block;
    margin: 0 1rem;
    line-height: 10vh;
    padding: 0 0.5rem;

    :hover {
      color: #ff7004;
    }
  }
`;

const DropDownContainer = styled.div`
  z-index: -999;
  position: absolute;
  top: 100%;
  left: 50%;
  transition: transform 0.5s, opacity 0.5s, display 0.5s;
  transform: ${({ toggle }) =>
      toggle ? "translateY(0%)" : "translateY(-160%)"}
    translateX(-50%);
  opacity: ${({ toggle }) => (toggle ? "1" : "0")};
`;
