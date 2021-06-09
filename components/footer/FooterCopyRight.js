import styled from "styled-components";
import { footerCopyRightBgColor } from "../../constants/constants";

const FooterCopyRight = () => {
  return (
    <MainContainer>
      <div>
        <p>
          &copy; 2021 <Span>Bhole Shankar Furniture </Span>
          Made with ❤ By <Span>Misty Pavan Kumar</Span>
        </p>
      </div>
      <div>
        <img src="/assets/icons/payment.png" alt="paymentimg" />
      </div>
    </MainContainer>
  );
};

export default FooterCopyRight;

const MainContainer = styled.div`
  width: 100%;
  background-color: ${footerCopyRightBgColor};
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  img {
    padding-bottom: 1rem;

    @media (min-width: 640px) {
      padding-bottom: 1rem;
    }

    @media (min-width: 768px) {
      padding-bottom: 0rem;
    }
  }

  @media (min-width: 640px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    text-align: center;
    color: #fff;
  }
`;

const Span = styled.span`
  font-weight: 700;
`;
