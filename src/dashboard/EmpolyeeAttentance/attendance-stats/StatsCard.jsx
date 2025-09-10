// File: src/dashboard/EmpolyeeAttentance/attendance-stats/StatsCard.jsx
import React from "react";

const StatsCard = ({
  icon: Icon,
  title,
  value,
  idx
}) => {


 

  return (
    <div className={`p-2 sm:p-4 bg-card rounded-lg border border-border`}>
      <div className="flex items-center justify-evenly lg:justify-between my-3 sm:my-4">
        <div className="rounded-xl bg-muted/50">
          <div className="text-[#524feb] text-sm sm:text-xs">
            <Icon size={16} />
          </div>
        </div>
        <div className="text-xs sm:text-sm font-medium flex items-center gap-1">
          <span
            className={`${idx === 2 ? "text-destructive" : "text-success"}`}
          >
            10%
          </span>
          <span className="text-muted-foreground">
            vs last month
          </span>
        </div>
      </div>
      <div className="text-center sm:text-left mb-2 sm:mb-3">
        <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 sm:mb-2 leading-tight">
          {title}
        </h3>
        <p className=" text-xl sm:text-2xl lg:text-3xl font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
