// File: src/dashboard/EmpolyeeAttentance/attendance-stats/statsData.js
import {  BriefcaseBusiness, Mic, BadgeInfo, AlarmClock, LucideUmbrella } from "lucide-react";

export const statsData = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    title: "Total Workforce",
    value: "150",
    changeType: "positive",
  },
  {
    id: 2,
    icon: Mic,
    title: "Present Workforce",
    value: "125",
    change: "vs last month",
    changeType: "positive",
  },
  {
    id: 3,
    icon: BadgeInfo,
    title: "Absent Workforce",
    value: "15",
    changeType: "negative",
  },
  {
    id: 4,
    icon: AlarmClock,
    title: "Late arrivals",
    value: "5",
    changeType: "positive",
  },
  {
    id: 5,
    icon: LucideUmbrella,
    title: "On leave",
    value: "5",
    changeType: "positive",
  },
];
