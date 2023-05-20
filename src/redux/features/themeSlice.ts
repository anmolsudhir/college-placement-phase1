import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : 'light',
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
    changeThemeAbs: (state, actions) => {
      state.theme = actions.payload;
    },
  },
});

export const {changeTheme, changeThemeAbs} = themeSlice.actions;
export default themeSlice.reducer;