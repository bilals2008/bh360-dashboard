// File: src/components/Sidebar/menuItems.js
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  LogOut,
  UserPlus,
  ChartSpline,
  Info,
} from "lucide-react";

export const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    type: "link",
    path: "/dashboard",
  },
  {
    id: "employee",
    icon: Users,
    label: "Employee",
    type: "dropdown",
    subItems: [
      { label: "Employee directory", path: "/dashboard" },
      { label: "Attendance", path: "/dashboard" },
      { label: "Leave Request", path: "/dashboard" },
      { label: "Absence Trends", path: "/dashboard" },
    ],
  },
  {
    id: "recruitment",
    icon: UserPlus,
    label: "Recruitment",
    type: "dropdown",
    subItems: [
      { label: "Job Postings", path: "/dashboard/message" },
      { label: "Applications", path: "/dashboard/message" },
      { label: "Interviews", path: "/dashboard/message" },
    ],
  },
  {
    id: "performance",
    icon: ChartSpline,
    label: "Performance",
    type: "dropdown",
    subItems: [
      { label: "Reviews", path: "/performance/reviews" },
      { label: "Goals", path: "/performance/goals" },
      { label: "Feedback", path: "/performance/feedback" },
    ],
  },
  {
    id: "payroll",
    icon: FileText,
    label: "Payroll",
    type: "dropdown",
    subItems: [
      { label: "Payroll information", path: "dashboard/payroll" },
      { label: "Benefits overview", path: "dashboard/payroll" },
      { label: "Compensation Analysis", path: "dashboard/payroll" },
    ],
  },
  {
    id: "training",
    icon: GraduationCap,
    label: "Training and Development",
    type: "link",
    path: "/training",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports and Analytics",
    type: "link",
    path: "/reports",
  },
  {
    id: "help",
    icon: Info,
    label: "Help",
    type: "link",
    path: "/help",
  },
  {
    id: "logout",
    icon: LogOut,
    label: "Logout",
    type: "link",
    path: "/logout",
  },
];
