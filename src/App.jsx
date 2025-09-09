import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./dashboard/Dashboard";
import EmpolyeeAttendace from "./dashboard/EmpolyeeAttentance/EmpolyeeAttendace";
import Payroll from "./dashboard/payroll/Payroll";
import Message from "./dashboard/message/Message";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <EmpolyeeAttendace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <EmpolyeeAttendace />,
          },
          {
            path: "attendance",
            element: <EmpolyeeAttendace />,
          },
          {
            path: "payroll",
            element: <Payroll />,
          },
          {
            path: "message",
            element: <Message />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
