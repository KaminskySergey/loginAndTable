import { FC, PropsWithChildren } from "react";
import { TableWrapper } from "./table-list.styled";

const TableList: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <TableWrapper>{children}</TableWrapper>;
};

export default TableList;
