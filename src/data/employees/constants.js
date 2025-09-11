// File: src/data/employees/constants.js

// Employment types
export const employmentTypes = {
  fullTime: "Full-Time",
  partTime: "Part-Time",
  contract: "Contract",
};

// Attendance status
export const attendanceStatus = {
  present: "Present",
  absent: "Absent",
  late: "Late",
};

// Payroll status
export const payrollStatus = {
  paid: "Paid",
  pending: "Pending",
  processing: "Processing",
};

// Departments
export const departments = [
  "All Departments",
  "HR",
  "IT",
  "Marketing",
  "Finance",
  "Sales",
  "Operations",
  "Design",
  "Support",
];

// Table configurations for different views
export const tableConfigs = {
  attendance: {
    title: "Employee Attendance",
    columns: [
      { key: "date", label: "Date", sortable: true },
      { key: "employee", label: "Employee", sortable: true },
      { key: "role", label: "Role", sortable: true },
      { key: "employmentType", label: "Employment Type", sortable: true },
      { key: "status", label: "Status", sortable: true },
      { key: "checkIn", label: "Check In", sortable: false },
      { key: "checkOut", label: "Check Out", sortable: false },
      { key: "overTime", label: "Overtime", sortable: true },
    ],
  },
  payroll: {
    title: "Employee Payroll",
    columns: [
      { key: "employee", label: "Employee", sortable: true },
      { key: "role", label: "Role", sortable: true },
      { key: "hoursWorked", label: "Hours", sortable: true },
      { key: "employmentType", label: "Employment Type", sortable: true },
      { key: "basicSalary", label: "Basic Salary", sortable: true },
      { key: "deductions", label: "Deductions", sortable: true },
      { key: "overtime", label: "Overtime", sortable: true },
      { key: "netSalary", label: "Net Salary", sortable: true },
      { key: "payrollStatus", label: "Status", sortable: true },
    ],
  },
};
