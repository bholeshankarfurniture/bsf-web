import styled from "styled-components";

const MobileNav = () => {
  return <MainDiv>sdfsdaf</MainDiv>;
};

export default MobileNav;

const MainDiv = styled.div`
  width: 350px;
  min-height: 100vh;
  background-color: khaki;
  padding: 50px 30px;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 768px){
      display: none;
  }
`;
