import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../../constants/constants";

const IconComponent = ({ Icon, iconColor, iconHoverColor }) => {
  return (
    <Div iconColor={iconColor} iconHoverColor={iconHoverColor}>
      <Icon />
    </Div>
  );
};

export default IconComponent;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: color 500ms;
  height: 1.5rem;
  color: #fff;

  @media (min-width: 1024px) {
    color: ${({ iconColor }) => (iconColor ? iconColor : "#000")};
  }

  :hover {
    color: ${({ iconHoverColor }) =>
      iconHoverColor ? iconHoverColor : secondaryColor};
  }

  @media (min-width: 640px) {
    width: 4rem;
    height: 1.75rem;
  }
`;
