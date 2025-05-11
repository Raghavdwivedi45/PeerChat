import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore.js";
import ChatHeader from "./skeletons/ChatHeader.jsx";
import MessageInput from "./MessageInput.jsx";
import MessageSkeleton from "./skeletons/MessageSkeleton.jsx"


const ChatContainer = () => {
    const { messages, getMessages, isMessageLoading, selectedUser } = useChatStore();
    
    useEffect(() => {
        getMessages(selectedUser._id)
    }, [selectedUser._id, getMessages]);

    if (!isMessageLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }
  
    return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader/>
      <p>msgs...</p>
      <MessageInput/>
    </div>
  )
}

export default ChatContainer