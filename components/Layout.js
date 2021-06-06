import Footer from "./footer/Footer";
import styled from "styled-components";
import Scroll from "./Scroll";
import Navbar from "./Navbar/destopNavbar/Navbar";
import MobileNav from "./Navbar/mobileNavbar/MobileNav";

const Layout = ({ children }) => {
  return (
    <Div>
      <Navbar />
      <MobileNav />
      {children}
      <Footer />
      <Scroll showBelow={80} />
    </Div>
  );
};

export default Layout;

const Div = styled.div`
  position: relative;
`;
