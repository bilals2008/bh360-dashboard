// File: src/dashboard/EmpolyeeAttentance/EmployeeControlsBar/EmployeeControlsBar.jsx

import { CalendarRangeIcon } from "lucide-react";
import SearchBAr from "./SearchBAr";
import FilterBtn from "./FilterBtn";
import ExportBtn from "./ExportBtn";
import TypeMenu from "./TypeMenu";
import { useState } from "react";

function EmpolyeeControlBar({
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  selectedStatus,
  setSelectedStatus,
  selectedEmploymentType,
  setSelectedEmploymentType,
  handleExportCSV,
}) {

  return (
    <div className="mb-6 text-muted-foreground font-extralight">
      <div className="flex flex-wrap items-center justify-between gap-5">
        {/* Search Bar */}
        <SearchBAr value={searchTerm} onChange={setSearchTerm} />

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-y-6 md:gap-3 ">
          <FilterBtn
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={setSelectedDepartment}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
          <TypeMenu
            selectedEmploymentType={selectedEmploymentType}
            setSelectedEmploymentType={setSelectedEmploymentType}
          />
          <div className="flex items-center">
            <div className="text-sm flex gap-2 items-center px-3 py-2 bg- rounded-lg">
              <CalendarRangeIcon size={14} />
              13 Jan, 2024
            </div>
            <ExportBtn onClick={handleExportCSV} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpolyeeControlBar;
