import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice/eventSlice";

const store = configureStore({
    reducer: {
        event: eventReducer
    }
});

export default store;