import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { setChatData } from "../utils/store/chatSlice";
export const randomNames = [
  "Aarav",
  "Isha",
  "Kabir",
  "Riya",
  "Arjun",
  "Meera",
  "Rohan",
  "Siya",
  "Aditya",
  "Tara",
  "Vihaan",
  "Anaya",
  "Krishna",
  "Dev",
  "Neha",
  "Raj",
  "Sneha",
  "Karan",
  "Pooja",
  "Sahil"
];

export const randomMessages = [
  "Hey everyone! 👋",
  "Wow, this is awesome!",
  "Learning React is fun 😍",
  "Can someone explain useEffect?",
  "I just finished this module 💪",
  "Namaste React FTW 🚀",
  "Who's watching this right now?",
  "This concept finally makes sense!",
  "That example was so clear 🙌",
  "Loving the energy here!",
  "React hooks are mind-blowing 🤯",
  "Can we go over props again?",
  "Haha, that was funny 😂",
  "Great explanation!",
  "I'm following along!",
  "Anyone else from India 🇮🇳?",
  "This chat is so active!",
  "Keep up the good work!",
  "useState makes life easier 😎",
  "Let's build something cool together!"
];
export const getRandomChat = () => {
  const name = randomNames[Math.floor(Math.random() * randomNames.length)];
  const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  return { name, message };
};

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
    },[])

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