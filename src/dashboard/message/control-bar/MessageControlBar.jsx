// File: src/dashboard/message/control-bar/MessageControlBar.jsx
import React from 'react'
import SearchBAr from '../../EmployeeControlsBar/SearchBAr'
import FilterBtn from '../../EmployeeControlsBar/FilterBtn'
import TypeMenu from '../../EmployeeControlsBar/TypeMenu'

function MessageControlBar() {
  return (
    <div className="mb-6 text-muted-foreground font-extralight">
      <div className="flex  flex-col items-center  md:flex-row gap-5">
        <div className="w-full md:w-sm">
          <SearchBAr />
        </div>
        <div className='flex items-center gap-3'>
          <FilterBtn />
          <TypeMenu />
        </div>
      </div>
    </div>
  );
}

export default MessageControlBar