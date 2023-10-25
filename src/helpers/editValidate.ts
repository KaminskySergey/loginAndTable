import * as Yup from "yup";

export const validationSchemaEdit = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email("Invalid email"),
  phone: Yup.number(),
  birthday: Yup.string(),
  address: Yup.string(),
});
