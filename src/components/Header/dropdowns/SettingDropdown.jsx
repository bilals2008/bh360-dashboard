import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Monitor, Palette, Settings, User } from 'lucide-react';

function SettingDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer hover:text-blue-500 hover:bg-gray-100 rounded-md transition-colors sm:p-1.5">
        <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 sm:w-44 md:w-48" align="end">
        <DropdownMenuItem className="py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-blue-50 focus:bg-blue-50">
          <Monitor className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="truncate">Dashboard Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-blue-50 focus:bg-blue-50">
          <Palette className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="truncate">Theme Toggle</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-blue-50 focus:bg-blue-50">
          <User className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="truncate">Preferences</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SettingDropdown