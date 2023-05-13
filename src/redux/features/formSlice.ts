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
            console.log(action.payload)
            state.formObject = {
                ...(state.formObject),
                ...(action.payload)
            }
        },
        clearObj : (state) => {
            state.formObject = {};
        }
    }
});

export const {addObj, clearObj} = formSlice.actions
export default formSlice.reducer