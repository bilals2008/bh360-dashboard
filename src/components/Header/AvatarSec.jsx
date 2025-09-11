// File: src/components/Header/AvatarSec.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { AccordionMenuItem } from "../Sidebar/SidebarAccordionItem";
import { SidebarItem } from "../Sidebar/SidebarItem";
import { menuItems } from "../Sidebar/menuItems";
import { ChevronDown } from "lucide-react";

function AvatarSec() {
  const [activeSubItem, setActiveSubItem] = useState("");

  return (
    <div className="lg:pl-6 flex items-center justify-center">
      <Sheet>
        {/* Avatar will now act as trigger */}
        <SheetTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-violet-50 rounded-md transition-colors p-1 sm:p-1.5">
            <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
              <AvatarFallback className="text-xs sm:text-sm">BH</AvatarFallback>
            </Avatar>
              <ChevronDown className="inline-block" size={16} />
          </div>
        </SheetTrigger>

        {/* Sidebar content opens on avatar click */}
        <SheetContent side="left" className="w-[240px] p-4">
          <div className="space-y-6">
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AvatarSec;
