// File: src/dashboard/message/Message.jsx
import React, { useState } from "react";
import DashboardHeader from "../dashboardHeader/DashboardHeader";
import MessageControlBar from "./control-bar/MessageControlBar";
import Chat from "./chat/Chat";

function Message() {
 
  return (
      <div className="bg-background  w-full max-w-full overflow-x-hidden">
        <div className="p-2 text-foreground sm:p-4 space-y-2 w-full max-w-full">
          <DashboardHeader
            title={"Payroll"}
            breadcrumbItems={[
              { label: "Dashboard", active: false },
              { label: "Message", active: true },
            ]}
          />
          <MessageControlBar />
          <Chat />
        </div>
      </div>
  );
}

export default Message;
