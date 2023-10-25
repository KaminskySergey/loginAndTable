import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getActors = createAsyncThunk(
  "/table",
  async (credentials: any, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `table/?limit=${credentials.limit}${
          credentials ? `&offset=${credentials.offset}` : ""
        }`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateActors = createAsyncThunk(
  "/table/id",
  async (
    credentials: {
      id: number | string | undefined;
      name: string;
      email: string;
      phone_number: string;
      birthday_date: string;
      address: string;
    },
    thunkAPI
  ) => {
    const { id } = credentials;
    try {
      const { data } = await axios.put(`table/${id}/`, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
