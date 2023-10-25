"use client";
import { FC } from "react";
import { TableComponent } from "../components/table/table";
import { isAuth } from "../components/isAuth/isAuth";
const Home: FC = () => <TableComponent />;

export default isAuth(Home);
