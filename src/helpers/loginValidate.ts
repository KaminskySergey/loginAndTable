import * as Yup from "yup";

export const userValidSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .required("Username is required")
    .max(150, "Username must be at most 150 characters")
    .min(1, "Username must be at least 1 character"),

  password: Yup.string()
    .trim()
    .required("Password is required")
    .max(128, "Password must be at most 128 characters")
    .min(1, "Password must be at least 1 character"),
});
