import Link from "next/link";
import { Header, Button } from "./header.styled";
import { useAppDispatch } from "@/src/hooks/redux";
import { logout } from "@/src/redux/user/sliceUser";
import Modal from "../modal/modal";
import { ModalLogout } from "../modal-logout/modal-logout";
import { useState } from "react";

export const HeaderComponent = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Header>
        <Button type="button" onClick={() => setIsOpen(true)}>
          Logout
        </Button>
      </Header>
      {isOpen && (
        <Modal onClose={handleToggle}>
          <ModalLogout handleToggle={handleToggle} />
        </Modal>
      )}
    </>
  );
};
