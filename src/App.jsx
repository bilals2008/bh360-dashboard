import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { index: true, element: <Dashboard/> },
      { path: "dashboard", element: <Dashboard /> },
    
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
