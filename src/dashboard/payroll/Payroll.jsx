// File: src/dashboard/payroll/PAyroll.jsx
import React from 'react'
import DashboardHeader from '../dashboardHeader/DashboardHeader'


function Payroll() {
  return <DashboardHeader title={"Payroll"} 
  breadcrumbItems={[
    {label:"Dashboard", active:false},
    {label:"Payroll", active:false},
    {label:"Payroll information", active:true}
  ]} />;
}

export default Payroll