// File: src/dashboard/EmpolyeeAttentance/EmpolyeeAttendace.jsx
import React from "react";
import DashboardHeader from "../dashboardHeader/DashboardHeader";
import StatsGrid from "./attendance-stats/StatsGrid";
import EmployeeTable from "./EmpolyeeTable/EmpolyeeTable";
import EmpolyeeControlBar from "../EmployeeControlsBar/EmployeeControlsBar";

function EmpolyeeAttendace() {
  return (
    <div className="bg-background min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="p-2 text-foreground sm:p-4 space-y-6 w-full max-w-full">
        <DashboardHeader
          title="Employee Attendance"
          breadcrumbItems={[
            { label: "Dashboard", active: false },
            { label: "Employee", active: false },
            { label: "Attendance", active: true },
          ]}
        />
        {/* Stats Grid */}
        <div className="w-full">
          <StatsGrid />
        </div>
<EmpolyeeControlBar/>

        {/* Employee Table */}
        <div className="w-full">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
}

export default EmpolyeeAttendace;
