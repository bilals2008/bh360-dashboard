// File: src/dashboard/message/chat/chat-list/ChatList.jsx
import React from "react";
import GroupChats from "./chat-types/GroupChats";
import PinChats from "./chat-types/PinChats";
import AllChats from "./chat-types/AllChats";

function ChatList() {
  return (
    <div className="w-full mx-auto bg-background p-4">
      <GroupChats />
      <PinChats />
      <AllChats />
    </div>
  );
}

export default ChatList;
