import styled from "styled-components";
import { secondaryColor } from "../../../constants/constants";

const IconComponent = ({ Icon }) => {
  return (
    <Div>
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
  transition: color 00ms;
  height: 1.5rem;

  :hover {
    color: ${secondaryColor};
  }

  @media (min-width: 640px) {
    width: 4rem;
    height: 1.75rem;
  }
`;
