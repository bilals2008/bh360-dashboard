// File: src/dashboard/EmpolyeeAttentance/EmpolyeeAttendace.jsx
import React from 'react'
import DashboardHeader from '../dashboardHeader/DashboardHeader'

function EmpolyeeAttendace() {
  return (
    <div>
      <DashboardHeader
        title="Empolyee Attendace"
        breadcrumbItems={[
          { label: "Dashboard", active: false },
          { label: "Empolyee", active: false },
          {label: "Attendance", active : true}
        ]}
      />
    </div>
  );
}

export default EmpolyeeAttendace