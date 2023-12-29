import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import dogSlice from "./dogSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        dog: dogSlice
    }
});

export default store;