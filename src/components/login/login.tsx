import { Formik } from "formik";
import { useState } from "react";
import { Vortex } from "react-loader-spinner";
import {
  Button,
  CheckIcon,
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
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { login } from "@/src/redux/user/thunkUser";
import { useEffect } from "react";
import "../../app/globals.css";
import { selectIsAuth } from "@/src/redux/user/selectorUser";
import { useRouter } from "next/router";
import { userValidSchema } from "@/src/helpers/loginValidate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <Container>
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
                  resetForm();
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
                resetForm();
              }
            }}
          >
            {({
              values,
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
                  {values.password.length >= 5 ? (
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
                <Button disabled={!isValid || !dirty} type="submit">
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
