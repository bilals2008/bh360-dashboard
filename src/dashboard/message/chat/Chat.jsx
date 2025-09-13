// File: src/dashboard/message/chat/Chat.jsx
import React from "react";
import ChatList from "./chat-list/ChatList";
import ChatInterface from "./chat-window/ChatWindow";
import { useChat } from "@/context/ChatContext";

function Chat() {
  const { selectedChat } = useChat();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-3 font-light text-muted-foreground text-sm">
      {/* Chat List - Mobile me tab show hoga jab koi chat select na ho */}
      <div
        className={`px-2 py-3 ${selectedChat ? "hidden" : "block"} lg:block`}
      >
        <ChatList />
      </div>

      {/* Chat Window - Mobile me tab show hoga jab chat select ho */}
      <div
        className={`px-2 py-3 ${selectedChat ? "block" : "hidden"} lg:block`}
      >
        <ChatInterface />
      </div>
    </div>
  );
}

export default Chat;
