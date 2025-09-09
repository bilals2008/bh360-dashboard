import React from "react";
import DashboardHeader from "../dashboardHeader/DashboardHeader";
import StatsGrid from "./attendance-stats/StatsGrid";

import EmpolyeeControlBar from "./EmployeeControlsBar/EmployeeControlsBar";

function EmpolyeeAttendace() {
  return (
    <div className="bg-background p-2 sm:p-4">
      <DashboardHeader
        title="Empolyee Attendace"
        breadcrumbItems={[
          { label: "Dashboard", active: false },
          { label: "Empolyee", active: false },
          { label: "Attendance", active: true },
        ]}
      />
      <StatsGrid />
      <EmpolyeeControlBar/>
    </div>
  );
}

export default EmpolyeeAttendace;
 