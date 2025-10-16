import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        toggleMenu:true,
    },
    reducers:{
        setToggleMenu:(state)=>{
            state.toggleMenu=! state.toggleMenu
        },
        closeMenu:(state)=>{
            state.toggleMenu=false;
        }
    }
});

export const {setToggleMenu,closeMenu} =toggleSlice.actions;
const toggleReducer=toggleSlice.reducer;
export default toggleReducer; 