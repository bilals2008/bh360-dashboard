// File: src/data/utils/styleUtils.jsx
// File: src/data/utils/styleUtils.jsx
export const getStatusBadgeClasses = (status) => {
  const baseClasses =
    "p-1 px-1.5 rounded-sm border bg-transparent text-xs font-light inline-flex items-center";

  switch (status?.toLowerCase()) {
    case "present":
      return `${baseClasses} border-green-300 text-green-700 dark:bg-green-900/30 dark:text-green-400`;
    case "absent":
      return `${baseClasses} text-red-700 border-red-300 bg-red-100 dark:bg-red-900/30 dark:text-red-400`;
    case "late":
      return `${baseClasses} border-yellow-300 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400`;
    case "inactive":
      return `${baseClasses} bg-gray-100 text-gray-800`;
 
  
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`;
  }
};

export const getEmploymentTypeBadgeClasses = (type) => {
  const baseClasses =
    "p-1 px-1 rounded-sm border bg-transparent text-xs font-medium inline-flex items-center";
  switch (type?.toLowerCase()) {
    case "full-time":
      return `${baseClasses} text-blue-700 border-violet-300 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400`;
    case "part-time":
      return `${baseClasses} bg-purple-100 border-blue-300 text-blue-700 dark:bg-purple-900/30 dark:text-purple-400`;
    case "contract":
      return `${baseClasses} bg-orange-100 text-orange-800`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`;
  }
};

export const getPayrollStatusBadgeClasses = (status) => {
  const baseClasses =
    "p-1 px-2 rounded-sm border bg-transparent text-xs font-medium inline-flex items-center";
  switch (status?.toLowerCase()) {
    case "paid":
      return `${baseClasses} bg-green-100 border-green-300 text-green-800 `;
    case "pending":
      return `${baseClasses} border-yellow-300 text-yellow-500`;
    case "processing":
      return `${baseClasses} bg-blue-100 border-blue-300 text-blue-800`;
    case "failed":
      return `${baseClasses} bg-red-100 border-red-300 text-red-800`;
    default:
      return `${baseClasses} bg-gray-100  text-gray-800`;
  }
};

// const PayrollView = () => {
//   const config = tableConfigs.payroll;
//   const {
//     searchTerm,
//     setSearchTerm,
//     departmentFilter,
//     setDepartmentFilter,
//     sortConfig,
//     handleSort,
//     stats,
//   } = useTableData(employeesData, config);

//   return (
//     <div className="bg-background min-h-screen w-full max-w-full overflow-x-hidden">
//       <div className="p-2 text-foreground sm:p-4 space-y-6 w-full max-w-full">
//         <DashboardHeader
//           title={config.title}
//           breadcrumbItems={[
//             { label: "Dashboard", active: false },
//             { label: "Employee", active: false },
//             { label: "Payroll", active: true },
//           ]}
//         />

//         {/* Payroll Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((stat, index) => (
//             <div key={index} className="bg-card rounded-lg border p-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-muted-foreground">
//                     {stat.label}
//                   </p>
//                   <p className="text-2xl font-bold">{stat.value}</p>
//                 </div>
//                 <div
//                   className={`h-12 w-12 rounded-full bg-${stat.color}-100 flex items-center justify-center`}
//                 >
//                   <div
//                     className={`h-6 w-6 rounded-full bg-${stat.color}-500`}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Search employees..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="px-3 py-2 border rounded-md"
//             />
//             <select
//               value={departmentFilter}
//               onChange={(e) => setDepartmentFilter(e.target.value)}
//               className="px-3 py-2 border rounded-md"
//             >
//               {departments.map((dept) => (
//                 <option key={dept} value={dept}>
//                   {dept}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex gap-2">
//             <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
//               Process Payroll
//             </button>
//             <button className="px-4 py-2 border rounded-md hover:bg-muted">
//               Export Report
//             </button>
//           </div>
//         </div>

//         {/* Dynamic Table */}
//         <DynamicTable
//           data={mockEmployees}
//           config={config}
//           searchTerm={searchTerm}
//           departmentFilter={departmentFilter}
//           sortConfig={sortConfig}
//           onSort={handleSort}
//           itemsPerPage={5}
//         />
//       </div>
//     </div>
//   );
// };

// export default PayrollView;
