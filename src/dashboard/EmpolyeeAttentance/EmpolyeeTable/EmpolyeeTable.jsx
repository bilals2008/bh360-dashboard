// File: src/dashboard/EmpolyeeAttentance/EmpolyeeTable/EmpolyeeTable.jsx
import React, { useState } from "react";
import { mockEmployees } from "./data";
import EmployeeRow from "./EmployeeRow";
import Pagination from "./Pagination";

const EmployeeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 5;

  const totalItems = mockEmployees.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedEmployees = mockEmployees.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500); // Loading spinner 0.5s
  };

  return (
    <div className="w-full border rounded-lg bg-card">
      <div className="w-full overflow-x-auto">
        <table className="table-auto min-w-full border-collapse">
          <thead className="sticky top-0 bg-muted/90 backdrop-blur-sm">
            <tr>
              {[
                "Date",
                "Employee",
                "Role",
                "Department",
                "Status",
                "Check in",
                "Check out",
                "Over time",
              ].map((header) => (
                <th
                  key={header}
                  className="text-sm font-medium text-[#000]/80! whitespace-nowrap capitalize text-left px-6 py-3"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-10 text-muted-foreground"
                >
                  <span className="loading loading-spinner loading-md lg:loading-lg"></span>
                </td>
              </tr>
            ) : (
              paginatedEmployees.map((employee) => (
                <EmployeeRow key={employee.id} employee={employee} />
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        showingStart={startIndex + 1}
        showingEnd={endIndex}
        totalItems={totalItems}
      />
    </div>
  );
};

export default EmployeeTable;
