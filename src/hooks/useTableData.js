// File: src/hooks/useTableData.js
// File: src/hooks/useTableData.js

import { useState, useMemo } from 'react';

export const useTableData = (data, config) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    setSortConfig(prevConfig => {
      if (prevConfig?.key === key) {
        return {
          key,
          direction: prevConfig.direction === 'asc' ? 'desc' : 'asc'
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const stats = useMemo(() => {
    if (config.title.includes('Attendance')) {
      const present = data.filter(emp => emp.status === 'Present').length;
      const absent = data.filter(emp => emp.status === 'Absent').length;
      const late = data.filter(emp => emp.status === 'Late').length;
      
      return [
        { label: 'Total Employees', value: data.length, color: 'blue' },
        { label: 'Present', value: present, color: 'green' },
        { label: 'Absent', value: absent, color: 'red' },
        { label: 'Late', value: late, color: 'yellow' }
      ];
    } else {
      const paid = data.filter(emp => emp.payrollStatus === 'Paid').length;
      const pending = data.filter(emp => emp.payrollStatus === 'Pending').length;
      const totalSalary = data.reduce((sum, emp) => sum + emp.netSalary, 0);
      
      return [
        { label: 'Total Employees', value: data.length, color: 'blue' },
        { label: 'Paid', value: paid, color: 'green' },
        { label: 'Pending', value: pending, color: 'yellow' },
        { label: 'Total Payout', value: `₨${totalSalary.toLocaleString()}`, color: 'purple' }
      ];
    }
  }, [data, config.title]);

  return {
    searchTerm,
    setSearchTerm,
    departmentFilter,
    setDepartmentFilter,
    sortConfig,
    handleSort,
    stats
  };
};