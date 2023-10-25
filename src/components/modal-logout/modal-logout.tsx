import { useAppDispatch } from "@/src/hooks/redux";
import {
  ContText,
  ContButton,
  Container,
  ButtonNo,
  ButtonYes,
  Text,
} from "./modal-logout.styled";
import { logout } from "@/src/redux/user/sliceUser";

interface IModalLogout {
  handleToggle: () => void;
}

export const ModalLogout = ({ handleToggle }: IModalLogout) => {
  const dispatch = useAppDispatch();
  const handleCLickLogout = () => {
    dispatch(logout());
    handleToggle();
  };
  return (
    <Container>
      <ContText>
        <p>Do you really want to leave? Because</p>
        <Text>Winter is Coming</Text>
      </ContText>
      <ContButton>
        <ButtonYes
          href={"/auth/login"}
          type="button"
          onClick={handleCLickLogout}
        >
          Yes
        </ButtonYes>
        <ButtonNo type="button" onClick={handleToggle}>
          No
        </ButtonNo>
      </ContButton>
    </Container>
  );
};
