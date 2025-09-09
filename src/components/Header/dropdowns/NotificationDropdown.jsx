import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertTriangle, BarChart3, Bell, UserPlus } from 'lucide-react';
function NotificationDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative cursor-pointer hover:text-blue-500 hover:bg-gray-100 rounded-md transition-colors p-1 sm:p-1.5">
        <span className="absolute right-1 top-0.5 sm:top-1 sm:right-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500 rounded-full"></span>
        <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 sm:w-52 md:w-60" align="end">
        <DropdownMenuItem className="py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-blue-50 focus:bg-blue-50">
          <UserPlus className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
          <span className="truncate">User registration alert</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-blue-50 focus:bg-blue-50">
          <BarChart3 className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
          <span className="truncate">Analytics update</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-orange-50 focus:bg-orange-50">
          <AlertTriangle className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-500 flex-shrink-0" />
          <span className="truncate">System maintenance</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NotificationDropdown