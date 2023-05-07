import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formObject : {
        
    }
}

export const formSlice  =createSlice({
    name : 'form',
    initialState,
    reducers : {
        addObj : (state, action) => {
            state.formObject = {
                // ...state,
                ...(state.formObject),
                ...(action.payload)
            }
        }
    }
});

export const {addObj} = formSlice.actions
export default formSlice.reducer