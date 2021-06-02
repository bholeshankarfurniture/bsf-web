import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../../constants/constants";

const DefaultMessageBar = () => {
  return (
    <Container>
      <CenterContainer>
        <MessageContainer>
          <p className=" text-center font-sans sm:text-left">
            Welcome to our funitures
          </p>
        </MessageContainer>
        <DropDownContainer className="hidden sm:block grid-cols-2 divide-x divide-gray-500">
          <a href="#" className="text-white pr-5 hover:text-[#ff7004]">
            Language: (ENG)
          </a>
          <a href="#" className="text-white pl-5 hover:text-[#ff7004]">
            Currency: (INR)
          </a>
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
const MessageContainer = styled.div``;
const DropDownContainer = styled.div``;
