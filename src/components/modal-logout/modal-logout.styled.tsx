import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContText = styled.div`
  font-size: 16px;
`;

export const ContButton = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 22px;
  margin-top: 16px;
  color: blue;
`;

export const ButtonNo = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  button:hover {
    background-color: #2980b9;
  }
`;

export const ButtonYes = styled(Link)`
  background-color: #c71212;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  button:hover {
    background-color: #bd2727;
  }
`;
