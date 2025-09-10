// File: src/components/Sidebar/menuItems.js
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  HelpCircle,
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
  },
  {
    id: "employee",
    icon: Users,
    label: "Employee",
    type: "dropdown",
    subItems: ["Employee directory", "Absence Trends"],
  },
  {
    id: "recruitment",
    icon: UserPlus,
    label: "Recruitment",
    type: "dropdown",
    subItems: ["Job Postings", "Applications", "Interviews"],
  },
  {
    id: "performance",
    icon: ChartSpline,
    label: "Performance",
    type: "dropdown",
    subItems: ["Reviews", "Goals", "Feedback"],
  },
  {
    id: "payroll",
    icon: FileText,
    label: "Payroll",
    type: "dropdown",
    subItems: ["Salary", "Benefits", "Tax"],
  },
  {
    id: "training",
    icon: GraduationCap,
    label: "Training and Development",
    type: "link",
  },

  {
    id: "reports",
    icon: FileText,
    label: "Reports and Analytics",
    type: "link",
  },
  {
    id: "help",
    icon: Info,
    label: "Help",
    type: "link",
  },
  {
    id: "logout",
    icon: LogOut,
    label: "Logout",
    type: "link",
  },
];
