import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_OFFSET } from "../constants/apiConstant";

const chatSlice=createSlice({
    name:"chatSlice",
    initialState:{
        chatData:[],
    },
    reducers:{
        setChatData:(state,action)=>{
            if(state.chatData.splice(YOUTUBE_OFFSET,1));
            state.chatData.unshift (action.payload);
        }
    }

});

export const {setChatData}=chatSlice.actions;
const chatReducer=chatSlice.reducer;
export default chatReducer; 