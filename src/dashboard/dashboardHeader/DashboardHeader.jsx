// File: src/dashboard/dashboardHeader/DashboardHeader.jsx

import React from "react";
import Breadcrumb from "./Breadcrumbs";
import PageTitle from "./PageTitle";
import DateTime from "./DateTime";

const DashboardHeader = (props) => {
  const {
    title,
    date = "13 January, 2024",
    time = "11:23 AM",
    breadcrumbItems = [],
    className = "",
  } = props;

  return (
    <div className={`dashboard-header ${className}`}>
      <div className="container-dashboard ">
        <div className="py-2 sm:py-4 flex flex-col md:flex-row-reverse  md:items-center justify-between">
          {/* Top Row - Date/Time */}
          <div className="flex md:justify-end items-center mb-2 sm:mb-3">
            <DateTime date={date} time={time} />
          </div>
          {/* Main Content Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col">
              <PageTitle title={title} />
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

// Usage example for other pages:
/*
// For Reports page:
<DashboardHeader 
  title="Reports and Analytics"
  breadcrumbItems={[
    { label: "Dashboard", active: false },
    { label: "Reports and Analytics", active: true },
  ]}
/>

// For Schedule page:
<DashboardHeader 
  title="Schedule"
  breadcrumbItems={[
    { label: "Dashboard", active: false },
    { label: "Schedule", active: true },
  ]}
/>
*/
