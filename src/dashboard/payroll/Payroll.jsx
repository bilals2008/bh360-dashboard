// File: src/dashboard/payroll/Payroll.jsx
import React from "react";
import DashboardHeader from "@/dashboard/dashboardHeader/DashboardHeader";
import PayrollView from "@/dashboard/payroll/PayrollView";
import EmpolyeeControlBar from "../EmployeeControlsBar/EmployeeControlsBar";

function Payroll() {
  return (
    <div className="bg-background min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="p-2 text-foreground sm:p-4 space-y-6 w-full max-w-full">
        <DashboardHeader
          title={"Payroll"}
          breadcrumbItems={[
            { label: "Dashboard", active: false },
            { label: "Payroll", active: false },
            { label: "Payroll information", active: true },
          ]}
        />
        <EmpolyeeControlBar/>
        <PayrollView />
      </div>
    </div>
  );
}

export default Payroll;
