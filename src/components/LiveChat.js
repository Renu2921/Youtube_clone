import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { setChatData } from "../utils/store/chatSlice";
import { getRandomChat } from "../utils/StaticData/chatData";

const LiveChat=()=>{
    const [liveChat, setLiveChat]=useState("");
    const dispatch=useDispatch();
    const chatData=useSelector((state)=>state.chat.chatData);
    useEffect(()=>{
      const timer=  setInterval(()=>{
        const { name, message } = getRandomChat();
      dispatch(setChatData({ name, message }));
        },2000);
        return(()=>{
            clearInterval(timer);
        });
    },[dispatch])

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("form is submiited",liveChat)
      dispatch(setChatData({
        name:"Renu Swami",
        message:liveChat
      }))
      setLiveChat(" ")
    }
    return (
<>
        <div className="border border-gray-600 w-full h-[600px] p-2 bg-slate-50 overflow-y-scroll flex flex-col-reverse">
            {chatData?.map((item,index)=>
            <div key={index}>
             <ChatMessage chatData={item}/> 
            </div>
            )}
           
        </div>
        <div className="w-full flex  border border-gray-700  p-3 ">
           <form className="flex w-full gap-3" onSubmit={handleSubmit}>
            <input type="text"
            value={liveChat}
             onChange={(e)=>{
               setLiveChat(e.target.value)}
             }
             placeholder="Write a comment message" 
             className="border w-full px-2 rounded-md py-1 "/>
            <button className="border border-gray-300 rounded-md bg-green-300 px-1">Submit</button>
           </form>
        </div>
        </>
    )
};

export default LiveChat;