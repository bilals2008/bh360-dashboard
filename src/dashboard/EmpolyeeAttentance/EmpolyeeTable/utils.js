import { attendanceStatus, employmentTypes } from "./constants";

// Get CSS classes for status badge
export const getStatusBadgeClasses = (status) => {
  const baseClasses =
    "p-1 px-1.5 rounded-sm border bg-transparent text-xs font-light inline-flex items-center";

  switch (status) {
    case attendanceStatus.present:
      return `${baseClasses} border-green-300 text-green-700 dark:bg-green-900/30 dark:text-green-400`;
    case attendanceStatus.absent:
      return `${baseClasses} border-red-300 text-red-700 dark:bg-red-900/30 dark:text-red-400`;
    case attendanceStatus.late:
      return `${baseClasses} border-yellow-300 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`;
  }
};

// Get CSS classes for employment type badge
export const getEmploymentTypeBadgeClasses = (type) => {
  const baseClasses =
    "p-1 px-1 rounded-sm border bg-transparent text-xs font-medium inline-flex items-center";

  switch (type) {
    case employmentTypes.fullTime:
      return `${baseClasses} text-blue-700 border-violet-300 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400`;
    case employmentTypes.partTime:
      return `${baseClasses} bg-purple-100 border-blue-300 text-blue-700 dark:bg-purple-900/30 dark:text-purple-400`;
    case employmentTypes.contract:
      return `${baseClasses} bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`;
  }
};

// Filter employees
export const filterEmployees = (employees, filters) => {
  return employees.filter((employee) => {
    const matchesSearch =
      filters.searchTerm === "" ||
      employee.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(filters.searchTerm.toLowerCase());

    const matchesDepartment =
      filters.department === "All Departments" ||
      employee.role.toLowerCase().includes(filters.department.toLowerCase()) ||
      employee.department
        .toLowerCase()
        .includes(filters.department.toLowerCase());

    const matchesStatus = !filters.status || employee.status === filters.status;
    const matchesEmploymentType =
      !filters.employmentType ||
      employee.employmentType === filters.employmentType;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus &&
      matchesEmploymentType
    );
  });
};

// Pagination Info
export const getPaginationInfo = (
  currentPage,
  totalItems,
  itemsPerPage = 5
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  return {
    totalPages,
    startIndex,
    endIndex,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
    showingStart: startIndex + 1,
    showingEnd: endIndex + 1,
    totalItems,
  };
};

// CSV Export
export const exportToCSV = (employees) => {
  const headers = [
    "Date",
    "Name",
    "Role",
    "Employment Type",
    "Status",
    "Check In",
    "Check Out",
    "Over Time",
  ];
  const csvContent = [
    headers.join(","),
    ...employees.map((emp) =>
      [
        emp.date,
        `"${emp.name}"`,
        `"${emp.role}"`,
        emp.employmentType,
        emp.status,
        emp.checkIn,
        emp.checkOut,
        emp.overTime,
      ].join(",")
    ),
  ].join("\n");
  return csvContent;
};

export const downloadCSV = (csvContent, filename = "employees.csv") => {
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
