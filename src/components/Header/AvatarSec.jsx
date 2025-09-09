import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { avatarMenuItems, logoutItem } from "./dropdowns/dropdownMenus";



function AvatarSec() {
  return (
    <div className="lg:pl-6 flex items-center justify-center gap-1 sm:gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1 sm:gap-2 cursor-pointer hover:bg-violet-50 rounded-md transition-colors p-1 sm:p-1.5">
          <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
            <AvatarFallback className="text-xs sm:text-sm">BH</AvatarFallback>
          </Avatar>
          <ChevronDown size={14} className="text-violet-400 sm:size-[17px]" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40 sm:w-48 md:w-52" align="end">
          {/* User Info */}
          <DropdownMenuLabel className="px-2 sm:px-3 hover:bg-gray-50">
            <div className="flex flex-col space-y-0.5 sm:space-y-1">
              <p className="text-xs sm:text-sm font-medium">BH360 Admin</p>
              <p className="text-xs text-muted-foreground truncate">
                admin@bh360.com
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {/* Menu Items */}
          {avatarMenuItems.map(({ id, label, icon: Icon }) => (
            <DropdownMenuItem
              key={id}
              className="py-1 sm:py-1.5 text-xs sm:text-sm bg-hover"
            >
              <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
              <span className="truncate">{label}</span>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          {/* Logout */}
          <DropdownMenuItem
            key={logoutItem.id}
            className={logoutItem.className}
          >
            <logoutItem.icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
            <span className="truncate">{logoutItem.label}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default AvatarSec;
