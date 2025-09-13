// File: src/context/chatContext.jsx
import React, { createContext, useContext, useState } from "react";
import { groupChatsData, pinnedChatsData, allChatsData } from "@/data/chatData";
import { initialMessages } from "@/dashboard/message/chat/chat-window/data/messages";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const allChats = [...groupChatsData, ...pinnedChatsData, ...allChatsData];

  const [selectedChat, setSelectedChat] = useState(allChats[0] || null);

  const [messages, setMessages] = useState(
    allChats.reduce((acc, chat) => {
      acc[chat.id] = initialMessages; 
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
