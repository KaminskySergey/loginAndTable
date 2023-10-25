import { InitUser } from "./initUser";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunkUser";

const userSlice = createSlice({
  name: "user",
  initialState: InitUser,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.user.username = null;
      state.user.password = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state) => {
        state.isAuth = true;
      })
      .addCase(login.rejected, (state) => {
        state.isAuth = false;
      });
  },
});
export const { logout } = userSlice.actions;
export const authReducer = userSlice.reducer;
