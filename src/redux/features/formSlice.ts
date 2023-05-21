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
                ...(state.formObject),
                ...(action.payload)
            }
            console.log(state.formObject)
        },
        clearObj : (state) => {
            state.formObject = {};
            console.log(state.formObject);
        },
        removeObj : (state, actions) => {
            state.formObject = {
              ...state.formObject,
            };
            delete state.formObject[actions.payload]
            console.log(state.formObject)
        }
    }
});

export const {addObj, clearObj, removeObj} = formSlice.actions
export default formSlice.reducer