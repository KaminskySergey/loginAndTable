import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api/";

export const login = createAsyncThunk(
  "/login",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("login/", credentials);

      return data;
    } catch (error) {
      console.error("Error:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
