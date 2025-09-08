import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { AccordionMenuItem } from "./SidebarAccordionItem";
import { SidebarItem } from "./SidebarItem";
import { menuItems } from "./menuItems";

export default function Sidebar() {
  const [activeSubItem, setActiveSubItem] = useState("");

  return (
    <div className="hidden md:block min-w-[240px] max-w-[240px] px-4 py-6 h-screen overflow-x-hidden font-light text-[#101720] bg-white border-r border-r-gray-200">
      <div className="space-y-6">
        <Accordion type="single" collapsible className="space-y-3">
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
    </div>
  );
}
