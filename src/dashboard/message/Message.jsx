import React from 'react'
import DashboardHeader from '../dashboardHeader/DashboardHeader';

function Message() {
  return (
    <>
      <DashboardHeader
        title={"Message"}
        breadcrumbItems={[
          { label: "Dashboard", active: false},
          { label: "Message", active: true },
        ]}
      />
    </>
  );
}

export default Message