import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer // change counterSlice name is valid for export default
        // todos: multiple store if needed 
    }
})