// File: src/dashboard/dashboardHeader/Breadcrumbs.jsx
// File: src/dashboard/dashboardHeader/Breadcrumbs.jsx
import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Breadcrumbs = ({ items, className = "" }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className={`flex items-center -translate-x-2.5 text-xs sm:text-sm ${className}`}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <BreadcrumbSeparator>
                <span className="text-muted-foreground mx-1 sm:mx-2">›</span>
              </BreadcrumbSeparator>
            )}
            <BreadcrumbItem>
              <button
                className={`pl-2 py-1 rounded-md transition-colors touch-manipulation min-h-[32px] ${
                  item.active
                    ? "text-[#524feb] font-medium bg-[#524feb]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={item.onClick}
              >
                {item.label}
              </button>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;