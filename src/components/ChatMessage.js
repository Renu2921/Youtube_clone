const ChatMessage=({chatData})=>{
    console.log("chatData",chatData);
    return (
        <div className="flex items-start gap-2 shadow-sm p-2">
            <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" 
        alt="profile-image"
        className="h-9"/>
        <div className="flex gap-2 items-center">
            
        <span className="text-md  font-bold  ">{chatData.name}</span>
        <span className="text-sm">{chatData.message}</span >
        </div> 
        </div>
    )
};
export default ChatMessage; 