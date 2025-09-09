import { FileText, Mail, MessageSquare, Users } from 'lucide-react';
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dropdownMenus } from './dropdownMenus';
function MessageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative cursor-pointer hover:text-blue-500 hover:bg-gray-100 rounded-md transition-colors p-1 sm:p-1.5">
        {/* Indicator dot */}
        <span className="absolute -right-0 sm:top-1 sm:right-1 h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500 rounded-full"></span>
        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 sm:w-52 md:w-60" align="end">
        {dropdownMenus.map(({ id, label, icon: Icon }) => (
          <DropdownMenuItem
            key={id}
            className="py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-hover"
          >
            <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
            <span className="truncate">{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MessageDropdown