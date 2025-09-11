// File: src/components/shared/DynamicTable.jsx
// File: src/components/shared/DynamicTable.jsx

import React, { useState, useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import Pagination from "./Pagination";
import {
  getStatusBadgeClasses,
  getEmploymentTypeBadgeClasses,
  getPayrollStatusBadgeClasses,
} from "@/data/utils/styleUtils";

const DynamicTable = ({
  data,
  config,
  itemsPerPage = 5,
  searchTerm = "",
  departmentFilter = "All Departments",
  sortConfig = null,
  onSort = null,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Filter and search data
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment =
        departmentFilter === "All Departments" ||
        item.department === departmentFilter;
      return matchesSearch && matchesDepartment;
    });
  }, [data, searchTerm, departmentFilter]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Pagination
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 300);
  };

  // Render cell content based on column type
  const renderCell = (item, column) => {
    switch (column.key) {
      case "employee":
        return (
          <div className="flex items-center gap-1 text-xs">
            <Avatar className="h-6 w-6 border">
              <AvatarImage src={item.avatar || ""} alt={item.name} />
              <AvatarFallback>{item.initials}</AvatarFallback>
            </Avatar>
            <span className="font-light">{item.name}</span>
          </div>
        );

      case "status":
        return (
          <span className={getStatusBadgeClasses(item.status)}>
            {item.status}
          </span>
        );

      case "payrollStatus":
        return (
          <span
            className={`${getPayrollStatusBadgeClasses(item.payrollStatus)}`}
          >
            {item.payrollStatus}
          </span>
        );

      case "employmentType":
        return (
          <span
            className={`${getEmploymentTypeBadgeClasses(item.employmentType)}`}
          >
            {item.employmentType}
          </span>
        );

      case "basicSalary":
        return (
          <span className="text-xs">{`₦${item.basicSalary.toLocaleString()}`}</span>
        );

      case "deductions":
        return (
          <span className="text-xs ">
            <span className="text-red-500">-</span>₦
            {item.deductions.toLocaleString()}
          </span>
        );

      case "overtime":
        return (
          <span className="text-xs ">
            <span className="text-green-500">+</span>₦
            {item.overtime.toLocaleString()}
          </span>
        );

      case "netSalary":
        return (
          <span className="text-xs">{`₦${item.netSalary.toLocaleString()}`}</span>
        );

      default:
        return item[column.key] || "-";
    }
  };

  return (
    <div className="w-full border rounded-lg bg-card ">
      <div className="w-full overflow-x-auto">
        <table className="table-auto min-w-full border-collapse">
          <thead className="sticky top-0 bg-muted/90 backdrop-blur-sm">
            <tr>
              {config.columns.map((column) => (
                <th
                  key={column.key}
                  className={`text-sm font-light text-[#000]/80 whitespace-nowrap capitalize text-left p-3 ${
                    column.sortable && onSort
                      ? "cursor-pointer hover:bg-muted/50"
                      : ""
                  }`}
                  onClick={
                    column.sortable && onSort
                      ? () => onSort(column.key)
                      : undefined
                  }
                >
                  <div className="flex justify-center items-center">
                    {column.label}
                    {column.sortable && sortConfig?.key === column.key && (
                      <span className="text-xs">
                        {sortConfig.direction === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={config.columns.length}
                  className="text-left text-muted-foreground"
                >
                  <span className="loading loading-spinner loading-md lg:loading-lg"></span>
                </td>
              </tr>
            ) : paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={config.columns.length}
                  className="text-left py-10 text-muted-foreground"
                >
                  No employees found
                </td>
              </tr>
            ) : (
              paginatedData.map((item) => (
                <tr
                  key={item.id}
                  className="table-row text-[#000]/70 border-b border-border hover:bg-muted/30"
                >
                  {config.columns.map((column) => (
                    <td key={column.key} className="table-cell text-left">
                      {renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          showingStart={startIndex + 1}
          showingEnd={endIndex}
          totalItems={totalItems}
        /> */}
      {/* )} */}
    </div>
  );
};

export default DynamicTable;
