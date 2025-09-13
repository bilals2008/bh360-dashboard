// File: src/dashboard/message/chat/chat-window/ChatInterface.jsx
import React from "react";
import ChatHeader from "./ui/ChatHeader";
import ChatInput from "./ui/ChatInput";
import Message from "./ui/Message";
import { useChat } from "@/context/chatContext";

const ChatInterface = () => {
  const { selectedChat, messages } = useChat();

  if (!selectedChat) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a chat to start messaging
      </div>
    );
  }

  const chatMessages = messages[selectedChat?.id] || [];

  return (
    <div className="flex flex-col h-screen max-w-full overflow-hidden bg-background">
      <div className="flex flex-col w-full max-w-4xl mx-auto md:my-4 md:rounded-lg overflow-hidden h-full">
        {/* Header */}
        <ChatHeader user={selectedChat} />

        {/* Messages with scroll */}
        <div className="flex-1 overflow-y-auto px-4 pt-4">
          {chatMessages.map((msg) => (
            <Message key={msg.id} message={msg} isMe={msg.isMe} />
          ))}
        </div>

        {/* Sticky Input */}
        <div className="sticky bottom-0 bg-background px-4 py-2">
          <ChatInput chatId={selectedChat.id} />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
