import { useState } from "react";
import styled from "styled-components";
import { mobileNavData } from "../../../../data/mobileNavData";
import ListOfNavItems from "../../../ListOfNavItems";

const SubUnorderdList = ({ isExpand, clickToggle }) => {
  const [isExpandSubList, setIsExpandSubList] = useState(false);
  const [selected, setSelected] = useState(0);

  const expandSubList = () => {
    setIsExpandSubList(!isExpandSubList);
  };

  return (
    <SubUnorderList isExpand={isExpand}>
      {mobileNavData.map((item, index) => {
        return (
          <ListOfNavItems
            key={index}
            path={item.path}
            label={item.label}
            hadList="true"
            expandOnClick={expandSubList}
          />
        );
      })}
    </SubUnorderList>
  );
};

export default SubUnorderdList;

const SubUnorderList = styled.ul`
  transition: display 0.5s ease-out;
  display: ${({ isExpand }) => (isExpand ? "block" : "none")};
`;

const Div = styled.div`
  transition: display 0.5s ease-out;
  display: ${({ isExpandSubList }) => (isExpandSubList ? "block" : "none")};
`;
