// File: src/dashboard/EmpolyeeAttentance/EmployeeControlsBar/TypeMenu.jsx
import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

import { ChevronDown } from 'lucide-react';
function TypeMenu() {
  return (
    <div className="px-4 py-2 text-sm rounded-lg text-muted-foreground">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="All Dapartment" />
        </SelectTrigger>
        <SelectContent>
          {[
            "All Dapartment",
            "HR",
            "Engineering",
            "Marketing",
            "Finance",
            "Sales",
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <SelectItem value={item}>{item}</SelectItem>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default TypeMenu