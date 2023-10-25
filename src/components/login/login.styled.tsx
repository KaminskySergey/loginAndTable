import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
  background-image: url("/backdrop.png");
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  /* position: fixed; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 400px;
  height: 440px;
  border-radius: 1rem;
  padding: 16px 32px;
  backdrop-filter: blur(3px);
  border: 1px solid #0791fa;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  color: #0791fa;
  margin-bottom: 32px;
  font-size: 32px;
`;

export const ContInput = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  height: 69px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid black;
  font-size: 16px;
  font-weight: 700;
  color: white;
  &::placeholder {
    color: #ccc;
    font-size: 16px;
  }
`;

export const IconNickname = styled(BiSolidUserCircle)`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 7px;
  right: 4px;
`;

export const IconPassword = styled(RiLockPasswordFill)`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 7px;
  right: 4px;
`;

export const CheckIcon = styled(FaCheck)`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 7px;
  right: 4px;
  color: green;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-weight: 600;
`;

export const TitleLoader = styled.h3`
  color: white;
  font-weight: 500;
`;

export const TextErrorNotValid = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
`;
