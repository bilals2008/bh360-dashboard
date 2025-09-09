// File: src/dashboard/dashboardHeader/PageTitle.jsx
import React from "react";

const PageTitle = ({ title, className = "" }) => {
  return (
    <h1
      className={`text-md sm:text-sm lg:text-xl font-medium text-foreground tracking-tight ${className}`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
