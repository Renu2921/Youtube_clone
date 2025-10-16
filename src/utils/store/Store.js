import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import videoListReducer from "./videoListSlice";
import chatReducer from "./chatSlice";

const Store=configureStore({
    reducer:{
        toggle:toggleReducer,
        video:videoListReducer,
        chat:chatReducer 
    }
});
export default Store;