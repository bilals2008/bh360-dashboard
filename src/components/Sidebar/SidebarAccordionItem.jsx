// File: src/components/Sidebar/SidebarAccordionItem.jsx
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const AccordionMenuItem = ({ item, activeSubItem, onSubItemClick }) => {
  const Icon = item.icon;
// console.log();

  return (
    <AccordionItem
    
      value={item.id}
      className="border-none"
    >
      <AccordionTrigger className="flex items-center gap-3 px-3 rounded-lg hover:bg-[#524feb] hover:text-muted data-[state=open]:bg-[#524feb] data-[state=open]:text-white border-none ">
        <div className="flex items-center gap-3 flex-1">
          <Icon size={20} />
          <span className="text-sm truncate overflow-hidden">{item.label}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="mt-2 ml-9 space-y-0.5">
        {item.subItems.map((subItem, index) => {
          // for click to
          // const isActive = activeSubItem === `${item.id}-${subItem}`;

          // for only one
              const isActive = subItem === "Employee directory";
          
          return (
            <div
              key={index}
              className={`flex items-center gap-2 text-xs cursor-pointer py-2 ${
                isActive
                  ? "text-[#524feb]"
                  : "text-gray-700 hover:text-[#524feb]"
              }`}
              onClick={() => onSubItemClick?.(`${item.id}-${subItem}`)}
            >
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#524feb]" />
              )}
              <span className="truncate overflow-hidden whitespace-ellipsis">
                {subItem}
              </span>
            </div>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};
