import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://dummyapi.io/data/v1/";

export const getUsers = createAsyncThunk("users/getUsers", async ({ page }) => {
  return await fetch(`${baseUrl}user?page=${page}&limit=10`, {
    headers: {
      "app-id": "62077c40d2428b0bc932f0f2",
    },
  }).then((res) => res.json());
});

const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usersSlice.reducer;
