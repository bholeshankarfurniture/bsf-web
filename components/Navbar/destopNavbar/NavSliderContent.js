import styled from "styled-components";
import { secondaryColor } from "../../../constants/constants";
import Link from "next/link";

const NavSliderContent = ({ title, data }) => {
  return (
    <ContentSection>
      <h1>{title}</h1>
      <Div>
        {data.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.path}>
              <LinkTag>{item.type}</LinkTag>
            </Link>
          </ListItem>
        ))}
      </Div>
    </ContentSection>
  );
};

export default NavSliderContent;

const Div = styled.div`
  margin-top: 1.75rem;
`;

const ListItem = styled.li`
  list-style-type: none;
  line-height: 2rem;
  cursor: pointer;

  :hover a {
    padding-left: 0.75rem;
    color: ${secondaryColor};
  }
`;

const LinkTag = styled.a`
  color: #fff;
  transition: padding-left 500ms, color 500ms;
`;

const ContentSection = styled.div`
  flex: 1;
  margin: 0 1rem;

  h1 {
    color: ${secondaryColor};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;
    padding-bottom: 0.2rem;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.2rem;
      border-bottom: 0.05rem solid ${secondaryColor};
      opacity: 0.5;
    }
  }
`;
