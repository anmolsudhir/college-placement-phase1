import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {HYDRATE, createWrapper } from "next-redux-wrapper";
import form  from "../features/formSlice";
import theme from "../features/themeSlice";
import mobile from "@/redux/features/mobileSlice";
import colors from "@/redux/features/colorSlice";

const combinedReducer = combineReducers({
    form,
    theme,
    mobile,
    colors,
});

const masterReducer = (state, action) => {
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
        };
        return nextState;
    }

    else return combinedReducer(state, action)
}

export const store = configureStore({
    reducer : masterReducer,
});

export const makeStore = () => store;


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
