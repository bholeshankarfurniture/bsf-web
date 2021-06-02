import styled from "styled-components";

export const Button = styled.button`
  color: ${({ textColor }) => (textColor ? textColor : "#fff")};
  font-weight: 600;
  text-decoration: none;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#ff7004")};
  cursor: ${({ cursor }) => (cursor ? cursor : "pointer")};
  transition: 0.3s ease-in-out;
  border: none;
  width: ${({ width }) => (width ? width : "160")}px;
  height: ${({ height }) => (height ? height : "55")}px;
  border-radius: ${({ bRadius }) => (bRadius ? bRadius : "0")}px;

  :hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor ? hoverBgColor : "#ff7004"};
    opacity: ${({ opacityOnHover }) =>
      opacityOnHover ? opacityOnHover : "0.8"};
  }
`;
