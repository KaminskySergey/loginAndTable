import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Container } from "./pagination.styled";

export const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <Container>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(
            event: React.MouseEvent<HTMLButtonElement>,
            page: number
          ) => {
            onPageChange(page);
          }}
          color="primary"
        />
      </Stack>
    </Container>
  );
};
