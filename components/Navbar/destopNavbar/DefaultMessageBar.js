import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../../constants/constants";

const DefaultMessageBar = () => {
  return (
    <Container>
      <CenterContainer>
        <MessageContainer>
          <p>Welcome to our funitures</p>
        </MessageContainer>
        <DropDownContainer>
          <Language href="#">Language: (ENG)</Language>
          <Currency href="#" className="item">
            Currency: (INR)
          </Currency>
        </DropDownContainer>
      </CenterContainer>
    </Container>
  );
};

export default DefaultMessageBar;

const Container = styled.div`
  width: 100%;
  background-color: ${primaryColor};

  p {
    color: ${secondaryColor};
    font-style: italic;
    font-weight: 100;
  }
`;

const CenterContainer = styled.div`
  width: 91.666667%;
  margin: auto;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;

  @media (min-width: 640px) {
    display: flex;
    justify-content: space-between;
  }
`;
const MessageContainer = styled.div`
  p {
    text-align: center;
    @media (min-width: 640px) {
      text-align: left;
    }
  }
`;
const DropDownContainer = styled.div`
  display: none;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 640px) {
    display: block;
  }
`;

const Language = styled.a`
  transition: color 500ms;
  padding-right: 1.25rem;
  color: #fff;

  :hover {
    color: ${secondaryColor};
  }
`;

const Currency = styled.a`
  transition: color 500ms;
  padding-left: 1.25rem;
  color: #fff;

  :hover {
    color: ${secondaryColor};
  }
`;
