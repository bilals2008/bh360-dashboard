// File: src/dashboard/message/chat/chat-list/chat-types/AllChats.jsx
import { CheckCheck, MessageCircleMore } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { allChatsData } from "@/data/chatData";
import { useChat } from "../../../../../context/chatContext";

function AllChats() {
  const { selectChat } = useChat();

  return (
    <div className="pb-2">
      <p className="flex gap-1 items-center mb-3 text-gray-600 text-sm font-medium">
        <MessageCircleMore size={16} />
        All messages
      </p>
      <div className="space-y-1">
        {allChatsData.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            onClick={() => selectChat(chat)}
          >
            <div className="text-foreground relative">
              <Avatar>
                <AvatarImage src={chat.avatarUrl} alt={chat.name} />
                <AvatarFallback>{chat.avatar}</AvatarFallback>
              </Avatar>
              {chat.isOnline && (
                <span className="badge badge-success size-1.5 absolute top-1 -right-1"></span>
              )}
            </div>
            <div className="flex-1">
              <h3 className=" w-auto text-sm font-medium text-gray-900 truncate">
                {chat.name}
              </h3>
              <p className="text-xs text-gray-500 truncate">
                {chat.lastMessage}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="text-xs text-gray-500">{chat.time}</p>
              {chat.hasCheckmark && (
                <CheckCheck size={14} className="text-green-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllChats;
