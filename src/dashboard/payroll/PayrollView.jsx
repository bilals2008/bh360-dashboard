// File: src/dashboard/payroll/PayrollView.jsx
import React from "react";
import DynamicTable from "@/components/shared/DynamicTable";
import { employeesData } from "@/data/employeeData";
import { tableConfigs} from "@/data/employees/constants";
import { useTableData } from "@/hooks/useTableData";

const PayrollView = () => {
  const config = tableConfigs.payroll;
  const {
    searchTerm,
    departmentFilter,
    sortConfig,
    handleSort,
  } = useTableData(employeesData, config);




  return (
    <div className="max-w-full text-xs!">
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
};

export default PayrollView;
