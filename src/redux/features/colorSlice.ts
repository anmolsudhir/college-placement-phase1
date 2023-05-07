import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  primary: {
    light: "rgb(153, 184, 32)",
    dark: "rgb(123, 151, 11)",
  },
  background: {
    light: "#F1F1F1",
    dark: "#1c1c1c",
  },
  border: {
    light: "#b9b9b9",
    dark: "#555555",
  },
};

export const colorSlice = createSlice({
    name : "colorScheme",
    initialState,
    reducers : {},
});

export default colorSlice.reducer;