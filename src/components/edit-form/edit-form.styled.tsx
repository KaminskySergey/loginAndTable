import { styled } from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
  width: 400px;
  height: 450px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  background-image: url("/tron.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: #ff0000;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  margin: 0 auto;
  margin-top: 32px;
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
  font-size: 12px;
  color: yellow;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  height: 32px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid black;
  font-size: 16px;
  font-weight: 700;
  color: white;
  &::placeholder {
    color: blue;
    font-size: 16px;
  }
`;

export const Button = styled.button``;
