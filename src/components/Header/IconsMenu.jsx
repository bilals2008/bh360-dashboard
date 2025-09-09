import {
  Bell,
  Mail,
  MessageSquare,
  Users,
  FileText,
  AlertTriangle,
  BarChart3,
  UserPlus,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SettingDropdown from "./dropdowns/SettingDropdown";
import MessageDropdown from "./dropdowns/MessageDropdown";
import NotificationDropdown from "./dropdowns/NotificationDropdown";

function IconsMenu() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
      {/* Settings Dropdown */}
      <SettingDropdown />

      {/* Messages Dropdown */}
      <MessageDropdown />

      {/* Notifications Dropdown */}
      <NotificationDropdown />
    </div>
  );
}

export default IconsMenu;
