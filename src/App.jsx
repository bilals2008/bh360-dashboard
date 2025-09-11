// File: src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./layout/MainLayout";

// lazy imports
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const EmpolyeeAttendace = lazy(() =>
  import("./dashboard/EmpolyeeAttentance/EmpolyeeAttendace")
);
const Payroll = lazy(() => import("./dashboard/payroll/Payroll"));
const Message = lazy(() => import("./dashboard/message/Message"));

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
          { index: true, element: <EmpolyeeAttendace /> },
          { path: "attendance", element: <EmpolyeeAttendace /> },
          { path: "payroll", element: <Payroll /> },
          { path: "message", element: <Message /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
