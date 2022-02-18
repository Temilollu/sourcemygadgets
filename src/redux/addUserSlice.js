import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./constants";

export const addUserHandler = createAsyncThunk(
  "user/addUser",
  async (payload) => {
    return await fetch(`${baseUrl}/user/create`, {
      method: "POST",
      headers: {
        "app-id": "62077c40d2428b0bc932f0f2",
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  }
);

const addUser = createSlice({
  name: "addUser",
  initialState: {
    addUser: [],
    status: null,
  },
  extraReducers: {
    [addUserHandler.pending]: (state, action) => {
      state.status = "loading";
    },
    [addUserHandler.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [addUserHandler.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default addUser.reducer;
