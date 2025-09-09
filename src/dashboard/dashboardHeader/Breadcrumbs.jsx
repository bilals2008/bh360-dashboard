// File: src/dashboard/dashboardHeader/Breadcrumbs.jsx
import React from "react";

const Breadcrumbs = ({ items, className = "" }) => {
  return (
    <nav
      className={`flex items-center -translate-x-2.5 text-xs sm:text-sm ${className}`}
    >
      {items.map((item, index) => (
        <div key={index}>
          {index > 0 && (
            <span className="text-muted-foreground mx-1 sm:mx-2">›</span>
          )}
          <button
            className={`px-2 py-1 rounded-md transition-colors touch-manipulation min-h-[32px] ${
              item.active
                ? "text-[#524feb] font-semibold bg-[#524feb]/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
            onClick={item.onClick}
          >
            {item.label}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;