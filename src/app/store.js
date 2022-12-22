import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer, // change counterSlice name is valid for export default
        // todos: multiple store if needed 
        posts: postReducer
    }
});

export default store;