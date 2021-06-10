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
  height: ${({ height }) => (height ? height : "40")}px;
  width: ${({ width }) => (width ? width : "40")}px;
  border-radius: 50px;
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease-in-out;
  margin-right: 0.3rem;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};

  :hover {
    background-color: ${secondaryColor};
    cursor: pointer;
  }

  :hover > a {
    color: #fff;
  }

  a {
    color: ${({ iconColor }) => (iconColor ? iconColor : "#474747")};
  }
`;
