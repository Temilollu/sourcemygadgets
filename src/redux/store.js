import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import postsReducer from "./postsSlice";
import singleUserReducer from "./singleUserSlice";
import singlePostSlice from "./singlePostSlice";
import addUserReducer from "./addUserSlice";
const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    singleUser: singleUserReducer,
    singlePost: singlePostSlice,
    addUser: addUserReducer,
  },
});

export default store;
