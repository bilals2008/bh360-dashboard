import {
  FileText,
  MessageSquare,
  User,
  Settings,
  Palette,
  Activity,
  Bell,
  LogOut,
  Users,
} from "lucide-react";

export const dropdownMenus = [
  {
    id: 1,
    label: "New message from admin",
    icon: MessageSquare,
  },
  {
    id: 2,
    label: "Team chat update",
    icon: Users,
  },
  {
    id: 3,
    label: "Weekly report",
    icon: FileText,
  },
];


export const avatarMenuItems = [
  { id: 1, label: "Profile Settings", icon: User },
  { id: 2, label: "Account Settings", icon: Settings },
  { id: 3, label: "Preferences", icon: Palette },
  { id: 4, label: "Activity Log", icon: Activity },
  { id: 5, label: "Notifications", icon: Bell },
];

export const logoutItem = {
  id: "logout",
  label: "Sign Out",
  icon: LogOut,
  className:
    "text-red-600 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-red-50 focus:bg-red-50",
};
