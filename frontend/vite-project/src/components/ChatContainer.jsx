import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"

const ChatContainer = () => {
    const { messages, getMessages, isMessageLoading, selectedUser } = useChatStore();
    useEffect(() => {
        getMessages(selectedUser._id)
    }, [selectedUser._id, getMessages]);

  if(isMessageLoading) return <div>Loading...</div>;
  
  return (
    <div>ChatContainer</div>
  )
}

export default ChatContainer