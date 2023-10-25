import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  width: 1000px;
  border-radius: 8px;
`;

export const TableHeader = styled.thead`
  background-color: #830d0d;
  color: white;
`;

export const TableRow = styled.tr`
  background-color: #3e3d70;
`;

export const TableCell = styled.td`
  border: 1px solid yellow;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
`;

export const ButtonEdit = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
