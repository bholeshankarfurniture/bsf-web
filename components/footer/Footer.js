import styled from "styled-components";
import { footerBgColor } from "../../constants/constants";
import FooterContent from "./FooterContent";
import { infoData, accountData } from "./../../data/footerData";
import { secondaryColor } from "./../../constants/constants";
import { Button } from "./../Button/Button";
import { MailIcon } from "@heroicons/react/outline";
import FooterCopyRight from "./FooterCopyRight";
import { FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import CustomeIcon from "../customeIcon/CustomeIcon";

const Footer = () => {
  return (
    <>
      <Container>
        <Div>
          <AboutSection>
            <h1>About Us</h1>
            <p>
              Lorem ipsu dotor sit amet cons adipisicing elit sed do eisum
              tempor inddicent ut labor et dolore mangna aliqua. Ut enim ad
              minim veniam, quix nostruds
            </p>
            <MediaIconContainer>
              <CustomeIcon
                iconColorOnHover="#fff"
                iconColor="#fff"
                Icon={FaTwitter}
                mediaURL="#"
              />
              <CustomeIcon
                iconColorOnHover="#fff"
                iconColor="#fff"
                Icon={FaInstagram}
                mediaURL="#"
              />
              <CustomeIcon
                iconColorOnHover="#fff"
                iconColor="#fff"
                Icon={FaPinterestP}
                mediaURL="#"
              />
            </MediaIconContainer>
          </AboutSection>
          <FooterContent title="Information" data={infoData} />
          <MyAccount>
            <FooterContent title="My Account" data={accountData} />
          </MyAccount>
          <NewsLetterContainer>
            <h1>Newsletter</h1>
            <InputForm
              type="email"
              name="email"
              placeholder="Your Mail*"
              autoComplete="off"
              required
            />

            <BtnContainer>
              <Button>
                <BtnDiv>
                  <MailIcon1 /> Send Mail
                </BtnDiv>
              </Button>
            </BtnContainer>
          </NewsLetterContainer>
        </Div>
      </Container>
      <FooterCopyRight />
    </>
  );
};

export default Footer;

const MailIcon1 = styled(MailIcon)`
  height: 1.5rem;
  padding-right: 0.75rem;
`;

const Container = styled.div`
  padding: 3rem 2rem;
  width: 100%;
  height: auto;
  background-color: ${footerBgColor};

  @media (min-width: 640px) {
    padding: 5rem;
  }

  h1 {
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 500;
    padding-bottom: 1.3rem;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.1rem;
  }
`;

const MyAccount = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const AboutSection = styled.div`
  h1,
  p {
    color: #fff;
  }
  p {
    font-weight: 400;
    padding: 0 0 1.2rem 0;
  }
`;

const MediaIconContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const NewsLetterContainer = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;
const InputForm = styled.input`
  background-color: transparent;
  border: 1px solid #4d4d4d;
  padding: 1rem 1.5rem;
  color: #fff;
  outline-width: 0;
  width: 100%;

  :focus {
    border: 1px solid ${secondaryColor};
    color: #fff;
  }

  margin-bottom: 2.5rem;
`;

const BtnContainer = styled.div``;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
