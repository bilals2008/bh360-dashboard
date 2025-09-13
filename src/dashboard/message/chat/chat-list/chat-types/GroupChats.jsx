// File: src/dashboard/message/chat/chat-list/chat-types/GroupChats.jsx
import { CheckCheck, Hash } from "lucide-react";
import React from "react";
import { groupChatsData } from "@/data/chatData";
import { useChat } from "@/context/chatContext";

function GroupChats() {
  const { selectChat } = useChat();
  return (
    <div className="pb-2">
      <p className="flex gap-1 items-center mb-3 text-gray-600 text-sm font-medium">
        <Hash size={16} />
        Group chats
      </p>
      <div className="">
        {groupChatsData.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer"
            onClick={() => selectChat(chat)}
          >
            <div className="w-10 h-10rounded-lg flex items-center justify-center">
              <Hash size={18} className="text-gray-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {chat.name}
              </h3>
              <p className=" w-full lg:w-32  text-xs text-gray-500 truncate">
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
export default GroupChats;
