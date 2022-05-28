import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: "cart",
    initialState: {value: {initialState}},
    reducers: {
        addToCart: (state, action) => {
            state = [...initialState, action.payload]
        },
    }
})

export default cartSlice.reducer