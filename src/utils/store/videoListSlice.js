import { createSlice } from "@reduxjs/toolkit";

const videoListSlice=createSlice({
    name:"videoList",
    initialState:{
        videoListData:[],
    },
    reducers:{
        setVideoListData:(state,action)=>{
            state.videoListData=action.payload;
        },
        setFilteredList: (state, action) => {
  const searchTerm = (action.payload ?? "").toLowerCase();
  state.videoListData = state.videoListData.filter((item) => {
    const title = item.snippet?.title ?? "";
    return title.toLowerCase().includes(searchTerm);
  });
}


    }
    
});

export const {setVideoListData,setFilteredList}=videoListSlice.actions;
const videoListReducer=videoListSlice.reducer;
export default videoListReducer;