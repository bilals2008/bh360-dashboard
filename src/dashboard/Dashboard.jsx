// File: src/dashboard/Dashboard.jsx

import { Outlet } from 'react-router-dom';
import EmpolyeeAttendace from './EmpolyeeAttentance/EmpolyeeAttendace';

function Dashboard() {
  return (
  <div className='font-karla'>
    <Outlet/>
  </div>
  )
}

export default Dashboard;