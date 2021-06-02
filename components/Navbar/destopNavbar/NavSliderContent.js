import styled from "styled-components";
import { primaryFontColor } from "../../../constants/constants";
import Link from "next/link";

const NavSliderContent = ({ title, data }) => {
  return (
    <ContentSection>
      <h1>{title}</h1>
      <div className="mt-7">
        {data.map((item) => (
          <li
            className="group list-none leading-8 cursor-pointer"
            key={item.id}
          >
            <Link href="#">
              <a className="font-semibold text-[#1d1d1d] group-hover:text-[#ff7004] group-hover:pl-3 duration-500 ease-in-out ">
                {item.type}
              </a>
            </Link>
          </li>
        ))}
      </div>
    </ContentSection>
  );
};

export default NavSliderContent;

const ContentSection = styled.div`
  flex: 1;
  margin: 0 1rem;

  h1 {
    color: ${primaryFontColor};
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
      border-bottom: 0.05rem solid rgba(0, 0, 0, 0.1);
    }
  }
`;
