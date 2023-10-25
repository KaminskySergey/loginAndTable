import { useAppDispatch } from "../../hooks/redux";
import { Formik } from "formik";
import {
  ErrorText,
  FormField,
  Input,
  Label,
  StyledForm,
  SubmitButton,
} from "./edit-form.styled";
import { IActors, IValuesEditForm } from "@/src/types/user.type";
import { updateActors } from "@/src/redux/actors/thunkActors";
import { validationSchemaEdit } from "@/src/helpers/editValidate";

interface IEditForm {
  handleToggle: () => void;
  currentActor: IActors | null;
}

export const EditForm = ({ handleToggle, currentActor }: IEditForm) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    name: currentActor?.name || "",
    email: currentActor?.email || "",
    phone: currentActor?.phone_number || "",
    birthday: currentActor?.birthday_date || "",
    address: currentActor?.address || "",
  };
  const handleSubmit = async (values: IValuesEditForm) => {
    const result = await dispatch(
      updateActors({
        id: currentActor?.id,
        name: values.name,
        email: values.email,
        phone_number: values.phone,
        birthday_date: values.birthday,
        address: values.address,
      })
    );
    if (result.type === "/table/id/fulfilled") {
      handleToggle();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaEdit}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" />
              <ErrorText name="name" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" />
              <ErrorText name="email" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="phone">Phone</Label>
              <Input type="tel" name="phone" />
              <ErrorText name="phone" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="birthday">Birthday</Label>
              <Input type="date" name="birthday" />
              <ErrorText name="birthday" component="div" />
            </FormField>

            <FormField>
              <Label htmlFor="address">Address</Label>
              <Input type="text" name="address" />
              <ErrorText name="address" component="div" />
            </FormField>

            <SubmitButton type="submit" disabled={isSubmitting}>
              Edit
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
