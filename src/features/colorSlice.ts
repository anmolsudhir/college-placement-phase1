import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    background : {
        light : '#fff',
        dark : '#000',
    }
};

export const colorSlice = createSlice({
    name : "colorScheme",
    initialState,
    reducers : {},
});

export default colorSlice.reducer;