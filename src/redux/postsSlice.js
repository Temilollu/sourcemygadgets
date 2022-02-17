import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./constants";

export const getPosts = createAsyncThunk("posts/getPosts", async ({ page }) => {
  return await fetch(`${baseUrl}post?page=${page}&limit=10`, {
    headers: {
      "app-id": "62077c40d2428b0bc932f0f2",
    },
  }).then((res) => res.json());
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postSlice.reducer;
