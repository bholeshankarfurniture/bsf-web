import Link from "next/link";
import styled from "styled-components";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import IconComponent from "./IconComponent";

const LogoHeaderBar = () => {
  return (
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
          <MenuIcon className="cursor-pointer hover:text-[#ff7004]  h-6 lg:hidden w-10 sm:h-7" />
        </IconsContainer>
      </div>
    </Container>
  );
};

export default LogoHeaderBar;

const Container = styled.div`
  width: 100%;
  background: #fff;
`;

const Logo = styled.div`
  a {
    font-size: 1.5rem;
    line-height: 40px;

    @media (min-width: 640px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }
`;
const IconsContainer = styled.div``;
