import { Bell, Mail, Settings } from 'lucide-react';
import React from 'react'

function IconsMenu() {
  return (
    <div className="flex items-center gap-4 text-gray-600">
      <div>
        <Settings className="h-5 w-5" />
      </div>

      <div className="indicator">
        <span className="indicator-item status status-info"></span>
        <Mail className="h-5 w-5 " />
      </div>

      <div className="indicator">
        <span className="indicator-item status status-info animate-pulse"></span>
        <Bell className="h-5 w-5" />
      </div>
    </div>
  );
}

export default IconsMenu