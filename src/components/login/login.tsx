import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Vortex } from "react-loader-spinner";
import {
  Button,
  CheckIcon,
  ContInput,
  Container,
  ErrorText,
  FormContainer,
  IconNickname,
  IconPassword,
  Input,
  Label,
  TextErrorNotValid,
  Title,
  TitleLoader,
  Wrapper,
} from "./login.styled";
import { initialLogin } from "@/src/consts/initLogin";
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { login } from "@/src/redux/user/thunkUser";
import { useEffect } from "react";
import "../../app/globals.css";
import { selectIsAuth } from "@/src/redux/user/selectorUser";
import { store } from "@/src/redux/store";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { userValidSchema } from "@/src/helpers/loginValidate";
import { isLogin } from "../isAuth/isAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type ILogin = {
  username: string;
  password: string;
};

export const LoginComponent = () => {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState("");
  const isAuth = useAppSelector(selectIsAuth);
  useEffect(() => {
    if (isAuth) {
      route.push("/");
    }
  }, [isAuth, route]);
  return (
    <>
      <Container className="box">
        <div className="box"></div>
        <Wrapper>
          <Title>Login</Title>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={userValidSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                setIsLoading(true);

                const result = await dispatch(login(values));
                if (result.type === "/login/fulfilled") {
                  // route.push("/");
                  toast.success("Success", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  setIsSuccess("Authentication successful.");
                  resetForm();
                }
                if (
                  result.type === "/login/rejected" ||
                  result.payload.code === "ERR_BAD_REQUEST"
                ) {
                  setIsSuccess("");
                  toast.error("Error", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  setIsError("Not valid username or password!!!");
                }
              } catch (err: unknown) {
                console.log(err);
              } finally {
                setIsLoading(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <FormContainer>
                <Label htmlFor="username">
                  {values.username.length >= 5 ? (
                    <CheckIcon />
                  ) : (
                    <IconNickname />
                  )}

                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={values.username}
                    onBlur={handleBlur}
                  />
                  <ErrorText name="username" component="div" />
                </Label>
                <Label htmlFor="password">
                  {values.username.length >= 5 ? (
                    <CheckIcon />
                  ) : (
                    <IconPassword />
                  )}

                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                  <ErrorText name="password" component="div" />
                </Label>
                <Button
                  disabled={!isValid || !dirty}
                  onClick={() => handleSubmit()}
                  type="submit"
                >
                  Login
                </Button>
                {isLoading && (
                  <>
                    <Vortex
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="vortex-loading"
                      wrapperStyle={{}}
                      wrapperClass="vortex-wrapper"
                      colors={[
                        "white",
                        "blue",
                        "black",
                        "yellow",
                        "orange",
                        "purple",
                      ]}
                    />
                    <TitleLoader>Winter is coming</TitleLoader>
                  </>
                )}
                {isError.length > 0 && (
                  <TextErrorNotValid>{isError}</TextErrorNotValid>
                )}
                {isSuccess.length > 3 && (
                  <TextErrorNotValid>{isSuccess}</TextErrorNotValid>
                )}
              </FormContainer>
            )}
          </Formik>
        </Wrapper>
      </Container>
    </>
  );
};
