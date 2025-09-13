// File: src/dashboard/message/chat/chat-window/ui/ChatHeader.jsx
import React from "react";
import {
  Search,
  MoreVertical,
  Phone,
  Video,
  ArrowLeft,
  Bookmark,
  Calendar1Icon,
  Pin,
} from "lucide-react";
import Avatar from "./Avatar";
import UserAvatar from "./Avatar";
import { Button } from "@/components/ui/button";
import { useChat } from "@/context/chatContext";
const ChatHeader = ({ user }) => {
  const { selectChat } = useChat();

  if (!user) {
    return null;
  }
  return (
    <div className="py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <Button
            variant="none"
            className="md:hidden mr-1"
            onClick={() => selectChat(null)}
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Button>
          <UserAvatar />
          <div>
            <h3 className="font-light text-[#000]">{user.name}</h3>
            <p className="text-xs text-success">Available</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Bookmark className="w-5 h-5" />
          <Calendar1Icon className="w-5 h-5" />
          <Pin className="w-5 h-5 rotate-45" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
