// File: src/dashboard/message/chat/chat-window/ui/ChatInput.jsx
import React, { useState } from "react";
import { Paperclip, Send, Smile, Mic, CirclePlus, LinkIcon } from "lucide-react";

const ChatInput = () => {
 
  return (
    <div className="px-4 ">
      <div className="flex items-center space-x-2 text-sm">
        <CirclePlus className="size-4" />
        <LinkIcon className="size-4" />
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type your message here..."
            className="w-full px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>

        <Smile className="size-4" />

        <Mic className="size-4" />

        <Send className="size-4 " />
      </div>
    </div>
  );
};

export default ChatInput;
