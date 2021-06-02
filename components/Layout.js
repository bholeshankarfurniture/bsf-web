import Footer from "./footer/Footer";
import styled from "styled-components";
import Scroll from "./Scroll";
import Navbar from "./Navbar/destopNavbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Div>
      <Navbar />
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
