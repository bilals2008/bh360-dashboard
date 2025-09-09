// File: src/dashboard/dashboardHeader/DateTime.jsx
import React from "react";

const DateTime = ({ date, time, className = "" }) => {
  return (
    <div
      className={`text-xs sm:text-sm text-muted-foreground font-medium ${className}`}
    >
      {date} {time}
    </div>
  );
};

export default DateTime;
