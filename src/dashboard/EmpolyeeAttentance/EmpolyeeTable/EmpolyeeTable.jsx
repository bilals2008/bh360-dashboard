// File: src/dashboard/EmpolyeeAttentance/EmpolyeeTable/EmpolyeeTable.jsx
import React from 'react'
import { tableConfigs } from '../../../data/employees/constants'
import { useTableData } from '../../../hooks/useTableData';
import { employeesData } from '../../../data/employeeData';
import DynamicTable from '../../../components/shared/DynamicTable';

function EmpolyeeTable() {
  const config = tableConfigs.attendance;
   const { searchTerm, departmentFilter, sortConfig, handleSort } =
     useTableData(employeesData, config);
  
  return (
    <div className="w-full border rounded-lg bg-card">
      <DynamicTable
        data={employeesData}
        config={config}
        searchTerm={searchTerm}
        departmentFilter={departmentFilter}
        sortConfig={sortConfig}
        onSort={handleSort}
        itemsPerPage={5}
      />
    </div>
  );
}

export default EmpolyeeTable
