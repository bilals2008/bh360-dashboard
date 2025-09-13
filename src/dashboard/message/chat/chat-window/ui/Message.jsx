// File: src/dashboard/message/chat/chat-window/ui/Message.jsx
import { CheckCheckIcon } from "lucide-react";
import React from "react";

const Message = ({ message, isMe }) => {
  return (
    <div className={`flex ${isMe ? "justify-end " : "justify-start "} mb-4`}>
      <div
        className={`max-w-[70%] ${
          isMe
            ? "order-2  text-right "
            : "  order-1 text-left"
        }`}
      >
        {isMe ? (
          <p className="text-violet-500 text-xs pr-1">Me</p>
        ) : (
          <p className="text-blue-500 text-xs pl-1">Choukmeunue</p>
        )}
        <div
          className={`rounded-lg  py-2 ${
            isMe ? " text-gray-800" : " text-gray-800"
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
        <div
          className={`text-xs text-gray-500 mt-1 ${
            isMe ? "text-right" : "text-left"
          }`}
        >
          <p className="flex items-center justify-end gap-2">
            {message.time}
            {isMe && (
              <span className="ml-1 inline-block">
                <CheckCheckIcon className="text-success" size={15} />
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
