// File: src/dashboard/message/chat/chat-window/ui/Avatr.jsx
import React from "react";
 import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
const UserAvatar = () => {
  return (
    <div className="relative pr-2.5">
      <div className="rounded-full overflow-hidden bg-gray-300">
        <Avatar>
          <AvatarImage src={"https://github.com/octocat.png"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default UserAvatar;
