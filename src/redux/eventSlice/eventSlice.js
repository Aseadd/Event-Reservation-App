import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";


const eventSlice = createSlice({
    name: "event",
    initialState: data,
    reducers: {
        buyEvent(state, action) {
            const event = state.find((event) => event.id === action.payload.id);
            if (event) {
                event.ticketsAvailable -= action.payload.quantity;
            }
        }
    }

});

export const { buyEvent } = eventSlice.actions;
export default eventSlice.reducer;

