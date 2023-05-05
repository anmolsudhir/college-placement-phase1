import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {HYDRATE, createWrapper } from "next-redux-wrapper";
import theme from "../features/themeSlice";
import mobile from "@/features/mobileSlice";
import colors from "@/features/colorSlice";

const combinedReducer = combineReducers({
    theme,
    mobile,
    colors,
});

const masterReducer = (state, action) => {
    if(action.type === HYDRATE){
        const nextState = {
            ...state,
            // colors : {
            //     ...(state.colors)
            // }
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

export const wrapper = createWrapper(makeStore, {debug : true});
