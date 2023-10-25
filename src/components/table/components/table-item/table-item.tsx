"use client";
import { useAppSelector } from "@/src/hooks/redux";
import { useState } from "react";
import {
  TableCell,
  TableHeader,
  TableRow,
  Table,
  ButtonEdit,
} from "./table-item.styled";
import { AiFillEdit } from "react-icons/ai";
import { IActors } from "@/src/types/user.type";
import Modal from "@/src/components/modal/modal";
import { EditForm } from "@/src/components/edit-form/edit-form";
import { selectAllActors } from "@/src/redux/actors/selectorActors";
import { formatDate } from "@/src/helpers/date";

const TableItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentActor, setCurrentActor] = useState<IActors | null>(null);

  const actors = useAppSelector(selectAllActors);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCurrentNoteEdit = (actor: IActors | null) => {
    setCurrentActor(actor);
    handleToggle();
  };

  return (
    <>
      <Table>
        <TableHeader>
          <tr>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Adress</TableCell>
            <TableCell></TableCell>
          </tr>
        </TableHeader>
        <tbody>
          {actors.map((el: IActors) => (
            <TableRow key={el.id}>
              <TableCell>{el.name}</TableCell>
              <TableCell>{el.email}</TableCell>
              <TableCell>{el.phone_number}</TableCell>
              <TableCell>{formatDate(el.birthday_date)}</TableCell>
              <TableCell>{el.address}</TableCell>
              <TableCell>
                <ButtonEdit
                  type="button"
                  onClick={() => handleCurrentNoteEdit(el)}
                >
                  <AiFillEdit />
                </ButtonEdit>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {isOpen && (
        <Modal onClose={handleToggle}>
          <EditForm currentActor={currentActor} handleToggle={handleToggle} />
        </Modal>
      )}
    </>
  );
};

export default TableItem;
