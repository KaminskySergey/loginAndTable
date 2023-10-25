import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "./pagination.styled";

interface ICustomPagination {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const CustomPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: ICustomPagination) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    onPageChange(page);
  };
  return (
    <Container>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </Container>
  );
};
