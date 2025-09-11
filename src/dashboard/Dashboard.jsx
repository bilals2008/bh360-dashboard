// File: src/dashboard/Dashboard.jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
  <div className='font-karla'>
    <Outlet/>
  </div>
  )
}

export default Dashboard;