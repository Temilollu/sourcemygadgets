import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./constants";

export const getSinglePost = createAsyncThunk(
  "posts/getSingleDetail",
  async (id) => {
    return await fetch(`${baseUrl}post/${id}`, {
      headers: {
        "app-id": "62077c40d2428b0bc932f0f2",
      },
    }).then((res) => res.json());
  }
);

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState: {
    singlePost: [],
    status: null,
  },
  extraReducers: {
    [getSinglePost.pending]: (state, action) => {
      state.status = "loading";
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.status = "success";
      state.singlePost = action.payload;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default singlePostSlice.reducer;
