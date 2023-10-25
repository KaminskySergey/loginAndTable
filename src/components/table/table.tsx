"use client";
import { useState } from "react";
import { HeaderComponent } from "../header/header";
import Layout from "../layout/layout";
import TableItem from "./components/table-item/table-item";
import TableList from "./components/table-list/table-list";
import { BackdropImage, Bg, Container, Title } from "./table.styled";
import { CustomPagination } from "../pagination/pagination";
import { useAppDispatch, useAppSelector } from "@/src/hooks/redux";
import { selectCountActors } from "@/src/redux/actors/selectorActors";
import { useEffect } from "react";
import { getActors } from "@/src/redux/actors/thunkActors";
export const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const totalCount = useAppSelector(selectCountActors);
  const limit = 10;
  const totalPages = Math.ceil(totalCount ? totalCount / limit : 0);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const newOffset = (page - 1) * limit;
    dispatch(getActors({ limit, offset: newOffset }));
  };

  useEffect(() => {
    dispatch(getActors({ limit }));
  }, [dispatch]);

  return (
    <Layout>
      <Bg></Bg>
      <BackdropImage></BackdropImage>
      <HeaderComponent />
      <Container>
        <TableList>
          <Title>Always remember that &ldquo;Winter Is Coming&rdquo;</Title>
          <TableItem />
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </TableList>
      </Container>
    </Layout>
  );
};
