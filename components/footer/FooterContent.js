import styled from "styled-components";
import Link from "next/link";
import { secondaryColor } from "../../constants/constants";

const FooterContent = ({ title, data }) => {
  return (
    <ContentSection>
      <h1>{title}</h1>
      <div>
        {data.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.path}>
              <LinkTag>{item.link}</LinkTag>
            </Link>
          </ListItem>
        ))}
      </div>
    </ContentSection>
  );
};

export default FooterContent;

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
  h1 {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;
