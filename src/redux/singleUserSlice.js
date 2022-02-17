import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./constants";

export const getSingleUser = createAsyncThunk(
  "users/getSingleDetail",
  async (id) => {
    return await fetch(`${baseUrl}user/${id}`, {
      headers: {
        "app-id": "62077c40d2428b0bc932f0f2",
      },
    }).then((res) => res.json());
  }
);

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState: {
    singleUser: [],
    status: null,
  },
  extraReducers: {
    [getSingleUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.singleUser = action.payload;
    },
    [getSingleUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default singleUserSlice.reducer;
