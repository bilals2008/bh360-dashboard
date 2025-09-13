import React, { createContext, useContext, useState } from "react";
import { groupChatsData, pinnedChatsData, allChatsData } from "@/data/chatData";
import { initialMessages } from "@/dashboard/message/chat/chat-window/data/messages";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const allChats = [...groupChatsData, ...pinnedChatsData, ...allChatsData];

  // ✅ Default: pehla chat select ho
  const [selectedChat, setSelectedChat] = useState(allChats[0] || null);

  // ✅ Har chat ke liye ek default messages list
  const [messages, setMessages] = useState(
    allChats.reduce((acc, chat) => {
      acc[chat.id] = initialMessages; // sab chats ke liye same messages (tum alag bhi kar sakte ho)
      return acc;
    }, {})
  );

  const selectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <ChatContext.Provider
      value={{ selectedChat, selectChat, messages, setMessages }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
