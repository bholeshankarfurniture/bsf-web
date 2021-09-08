import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  secondaryColorGlow,
  secondaryDarkColor,
} from "../../../constants/constants";
import ShopNavContainer from "./ShopNavContainer";
import IconComponent from "./IconComponent";

const Navbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 990) {
      setMobileView(true);
    }
  }, [isMobileView]);

  const styles = {
    iconColor: `${secondaryDarkColor}`,
  };

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const open = () => {
    setToggle(true);
  };

  const close = () => {
    setToggle(false);
  };

  return (
    <>
      {/* <DefaultMessageBarContainer>
        <DefaultMessageBar />
      </DefaultMessageBarContainer> */}

      {/* <LogoHeaderBarContainer>
        <LogoHeaderBar />
      </LogoHeaderBarContainer> */}

      <Container>
        <MainContainer>
          <Nav>
            <Logo>
              <h4 onClick={() => router.replace("/")}>
                {isMobileView ? "BS Furniture" : "Bhole Shankar Furniture"}
              </h4>
            </Logo>
            <MainCenter>
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
              {/* <Link href="/bsfBlog">
                <a>Blog</a>
              </Link> */}
              <Link href="/contactus">
                <a>Contact Us</a>
              </Link>
            </MainCenter>
            <IconsContainer>
              <IconComponent Icon={SearchIcon} iconColor={styles.iconColor} />
              <IconComponent Icon={UserIcon} iconColor={styles.iconColor} />
              <IconComponent
                Icon={ShoppingBagIcon}
                iconColor={styles.iconColor}
              />
              <MenuIcon1 onClick={clickHandler} iconColor={styles.iconColor} />
            </IconsContainer>
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

const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease-out;
`;

const MainContainer = styled.div`
  z-index: 999;
  padding: 1.3rem 0;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border-bottom: 0.15rem solid ${secondaryColor};
  box-shadow: 0 0px 20px ${secondaryColorGlow};
  background-color: ${primaryColor};

  @media (min-width: 1024px) {
    padding: 0.3rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  a {
    color: ${secondaryDarkColor};
    font-weight: 400;
    margin: 0 1rem;
    line-height: 10vh;
    padding: 0 0.5rem;
    display: none;

    :hover {
      color: ${secondaryColor};
    }

    @media (min-width: 1024px) {
      display: inline-block;
    }
  }
`;

const Logo = styled.div`
  h4 {
    color: ${secondaryColor};
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const MainCenter = styled.div``;

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

const IconsContainer = styled.div`
  display: grid;
  color: #fff;
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
  color: #fff;

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
