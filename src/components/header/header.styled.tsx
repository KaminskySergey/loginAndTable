import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 4px 32px;
  background-color: black;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  height: 32px;
`;
