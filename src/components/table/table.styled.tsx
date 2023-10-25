import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
`;

export const Bg = styled.div`
  background-image: url("/backdropTable.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BackdropImage = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: white;
  text-align: center;
  text-decoration: underline;
`;
