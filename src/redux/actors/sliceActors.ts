import { createSlice } from "@reduxjs/toolkit";
import { InitActors } from "./initActors";
import { getActors, updateActors } from "./thunkActors";

//   },
const userSlice = createSlice({
  name: "user",
  initialState: InitActors,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getActors.fulfilled, (state, action) => {
      state.data = action.payload.results;
      state.nextLink = action.payload.next;
      state.previousLink = action.payload.previous;
      state.count = action.payload.count;
    });
    builder.addCase(updateActors.fulfilled, (state, action) => {
      state.editActor = action.payload.results;
    });
  },
});
// export const { logout } = userSlice.actions;
export const actorsReducer = userSlice.reducer;
