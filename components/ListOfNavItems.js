import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { secondaryColor, secondaryFontColor } from "../constants/constants";
import { mobileNavData } from "../data/mobileNavData";
import { MdAdd } from "react-icons/md";

const ListOfNavItems = ({
  label,
  path,
  hadList,
  clickToggle,
  expandOnClick,
}) => {
  return (
    <Link href={path}>
      <List onClick={clickToggle}>
        <a>{label}</a>
        {hadList && <MdAdd onClick={expandOnClick} />}
      </List>
    </Link>
  );
};

export default ListOfNavItems;

const List = styled.li`
  color: #fff;
  font-size: 20px;
  padding: 13px 0;
  border-top: 1px solid #eee;
  transition: color 0.5s;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  :hover {
    color: ${secondaryColor};
    cursor: pointer;
  }
`;
