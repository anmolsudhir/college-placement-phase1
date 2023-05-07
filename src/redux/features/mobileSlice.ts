import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobile: false,
};

const mobileSlice = createSlice({
  name: "mobileview",
  initialState,
  reducers: {
    changeMobile: (state) => {
      state.mobile = !state.mobile
    },
  },
});

export const { changeMobile } = mobileSlice.actions;
export default mobileSlice.reducer;