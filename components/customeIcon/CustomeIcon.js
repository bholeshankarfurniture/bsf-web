import Link from "next/link";
import styled from "styled-components";
import { secondaryColor } from "./../../constants/constants";
const MediaIcon = ({
  Icon,
  mediaURL,
  bgColor,
  iconColor,
  iconColorOnHover,
  padding,
}) => {
  return (
    <Div
      bgColor={bgColor}
      iconColorOnHover={iconColorOnHover}
      iconColor={iconColor}
      padding={padding}
    >
      <Link href={mediaURL}>
        <a>
          <Icon />
        </a>
      </Link>
    </Div>
  );
};

export default MediaIcon;

const Div = styled.div`
  padding: ${({ padding }) => (padding ? padding : "0.6")}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease-in-out;
  margin-right: 0.3rem;
  color: ${({ iconColor }) => (iconColor ? iconColor : "#474747")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};

  :hover {
    background-color: ${secondaryColor};
    color: ${({ iconColorOnHover }) =>
      iconColorOnHover ? iconColorOnHover : "#474747"};
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
