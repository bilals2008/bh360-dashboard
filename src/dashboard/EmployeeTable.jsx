import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { Search, Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const employeeData = [
  {
    id: 1,
    date: '13/01',
    employee: { name: 'Aisha Doe', avatar: '👩‍💼' },
    role: 'HR Manager',
    employmentType: 'Full-Time',
    status: 'Present',
    checkIn: '09:00 AM',
    checkOut: '05:00 PM',
    overTime: '0h'
  },
  {
    id: 2,
    date: '13/01',
    employee: { name: 'Chukwuemeka', avatar: '👨‍💻' },
    role: 'Software Engineer',
    employmentType: 'Part-Time',
    status: 'Absent',
    checkIn: '-',
    checkOut: '-',
    overTime: '0h'
  },
  {
    id: 3,
    date: '13/01',
    employee: { name: 'Sulaiman', avatar: '👨‍💼' },
    role: 'Marketing Executive',
    employmentType: 'Full-Time',
    status: 'Late',
    checkIn: '10:15 AM',
    checkOut: '05:00 PM',
    overTime: '0h'
  },
  {
    id: 4,
    date: '13/01',
    employee: { name: 'Olamide', avatar: '👨‍💼' },
    role: 'Financial Analyst',
    employmentType: 'Full-Time',
    status: 'Present',
    checkIn: '09:00 AM',
    checkOut: '06:00 PM',
    overTime: '1h'
  },
  {
    id: 5,
    date: '13/01',
    employee: { name: 'Jide', avatar: '👨‍💼' },
    role: 'Project Manager',
    employmentType: 'Full-Time',
    status: 'Present',
    checkIn: '09:00 AM',
    checkOut: '05:00 PM',
    overTime: '0h'
  },
  {
    id: 6,
    date: '13/01',
    employee: { name: 'Femi', avatar: '👨‍💼' },
    role: 'Sales Manager',
    employmentType: 'Full-Time',
    status: 'Present',
    checkIn: '09:00 AM',
    checkOut: '07:00 PM',
    overTime: '2h'
  }
];

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Present: 'bg-green-100 text-green-800 border-green-200',
    Absent: 'bg-red-100 text-red-800 border-red-200',
    Late: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

const EmploymentTypeBadge = ({ type }) => {
  const typeStyles = {
    'Full-Time': 'bg-blue-100 text-blue-800 border-blue-200',
    'Part-Time': 'bg-purple-100 text-purple-800 border-purple-200'
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeStyles[type]}`}>
      {type}
    </span>
  );
};

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => (
      <div className="font-medium text-gray-900">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor('employee', {
    header: 'Employee',
    cell: (info) => {
      const employee = info.getValue();
      return (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
            {employee.avatar}
          </div>
          <span className="font-medium text-gray-900">{employee.name}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: (info) => (
      <div className="text-gray-600">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor('employmentType', {
    header: 'Employment Type',
    cell: (info) => <EmploymentTypeBadge type={info.getValue()} />,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <StatusBadge status={info.getValue()} />,
  }),
  columnHelper.accessor('checkIn', {
    header: 'Check In',
    cell: (info) => (
      <div className="text-gray-600">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor('checkOut', {
    header: 'Check Out',
    cell: (info) => (
      <div className="text-gray-600">{info.getValue()}</div>
    ),
  }),
  columnHelper.accessor('overTime', {
    header: 'Over Time',
    cell: (info) => (
      <div className="text-gray-600">{info.getValue()}</div>
    ),
  }),
];

export default function EmployeeTable() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');

  const table = useReactTable({
    data: employeeData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  const handleExportCSV = () => {
    const headers = columns.map(col => col.header);
    const rows = employeeData.map(row => [
      row.date,
      row.employee.name,
      row.role,
      row.employmentType,
      row.status,
      row.checkIn,
      row.checkOut,
      row.overTime
    ]);
    
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'employee_attendance.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, role, department..."
              value={globalFilter ?? ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
              ⌘ K
            </kbd>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            
            <select 
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option>All Departments</option>
              <option>HR</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Sales</option>
            </select>

            <div className="text-sm text-gray-600 px-3 py-2 bg-gray-100 rounded-lg">
              📅 13 Jan, 2024
            </div>

            <button 
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-sm text-gray-700">
          Showing{' '}
          <span className="font-medium">
            {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
          </span>{' '}
          to{' '}
          <span className="font-medium">
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )}
          </span>{' '}
          of{' '}
          <span className="font-medium">{table.getFilteredRowModel().rows.length}</span>{' '}
          employees
          {table.getSelectedRowModel().rows.length > 0 && (
            <span className="ml-2 text-blue-600 font-medium">
              ({table.getSelectedRowModel().rows.length} selected)
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* Page Size Selector */}
          <select
            value={table.getState().pagination.pageSize}
            onChange={e => table.setPageSize(Number(e.target.value))}
            className="px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          >
            {[5, 10, 20, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>

        <div className="flex items-center gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: table.getPageCount() }, (_, i) => (
              <button
                key={i}
                onClick={() => table.setPageIndex(i)}
                className={`px-3 py-1 text-sm rounded ${
                  table.getState().pagination.pageIndex === i
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}
            {table.getPageCount() > 3 && (
              <span className="px-3 py-1 text-sm text-gray-500">...</span>
            )}
          </div>

          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}