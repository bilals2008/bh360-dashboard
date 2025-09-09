import React from "react";
import StatsCard from "./StatsCard";
import { statsData } from "./statsData";

const StatsGrid = ({ className = "" }) => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4  p-2 sm:mx-auto ${className}`}
    >
      {statsData.map((stat,idx) => (
        <StatsCard
          key={stat.id}
          icon={stat.icon} 
          title={stat.title}
          value={stat.value}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
