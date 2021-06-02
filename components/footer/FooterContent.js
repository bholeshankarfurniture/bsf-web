import styled from "styled-components";
import Link from "next/link";

const FooterContent = ({ title, data }) => {
  return (
    <ContentSection>
      <h1>{title}</h1>
      <div>
        {data.map((item) => (
          <li
            className="group list-none leading-8 cursor-pointer"
            key={item.id}
          >
            <Link href={item.path}>
              <a className="font-noraml text-white group-hover:text-[#ff7004] group-hover:pl-3 duration-500 ease-in-out ">
                {item.link}
              </a>
            </Link>
          </li>
        ))}
      </div>
    </ContentSection>
  );
};

export default FooterContent;

const ContentSection = styled.div`
  h1 {
    text-transform: uppercase;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;
