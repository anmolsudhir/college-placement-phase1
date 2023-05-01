import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import theme from "../features/themeSlice";
import mobile from "@/features/mobileSlice";

const combinedReducer = combineReducers({
    theme,
    mobile,
});

export const store = configureStore({
    reducer : combinedReducer,
})

export const makeStore = () => store


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
