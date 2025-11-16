// File: src/components/Header/AvatarSec.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { AccordionMenuItem } from "../Sidebar/SidebarAccordionItem";
import { SidebarItem } from "../Sidebar/SidebarItem";
import { menuItems } from "../Sidebar/menuItems";

function AvatarSec() {
  const [activeSubItem, setActiveSubItem] = useState("");

  return (
    <div className="lg:pl-6 flex items-center justify-center">
      {/* MOBILE ONLY SHEET */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-violet-50 rounded-md transition-colors p-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/bilals2008.png" />
              <AvatarFallback>BH</AvatarFallback>
            </Avatar>
            <ChevronDown size={16} />
          </div>
        </SheetTrigger>

        <SheetContent side="left" className="w-[240px] p-4 lg:hidden">
          <Accordion collapsible className="space-y-3">
            {menuItems.map((item) =>
              item.type === "dropdown" ? (
                <AccordionMenuItem
                  key={item.id}
                  item={item}
                  activeSubItem={activeSubItem}
                  onSubItemClick={setActiveSubItem}
                />
              ) : (
                <SidebarItem key={item.id} item={item} />
              )
            )}
          </Accordion>
        </SheetContent>
      </Sheet>

      {/* DESKTOP DROPDOWN */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hidden lg:flex">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-violet-50 rounded-md p-1">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/bilals2008.png" />
              <AvatarFallback>BH</AvatarFallback>
            </Avatar>
            <ChevronDown size={16} />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40">
          <DropdownMenuItem onClick={() => console.log("Profile clicked")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Help</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default AvatarSec;
