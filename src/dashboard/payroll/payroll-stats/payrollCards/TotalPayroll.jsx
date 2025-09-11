// File: src/dashboard/payroll/payroll-stats/payrollCards/TotalPayroll.jsx
import React from 'react'
import { Button } from "@/components/ui/button";
import { Banknote } from 'lucide-react';

function TotalPayroll() {
  return (
    <div className="dashboard-card  ">
      <div className="flex justify-between items-center mb-4">
        <div className="p-3 bg-[#524feb]/10 rounded-lg">
          <Banknote className=" opacity-50 w-5 h-5 text-[#524feb]" />
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground font-light">
            No. of Employees:
            <span className="text-xs font-light text-success"> 150</span>
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col sm:flex-row justify-between">
        <div className="self-start sm:self-center">
          <p className="text-xs font-light text-muted-foreground mb-2">
            Total Payroll
          </p>
          <p className="text-xl font-light text-foreground mb-6">
            ₦5,000,000<span className="text-muted-foreground">.00</span>
          </p>
        </div>
        <div className="flex">
          <Button variant="none" className=" flex-1 text-xs font-light">
            View schedule
          </Button>
          <Button
            size="md"
            className="bg-[#524feb] px-3 py-3 flex-1 text-xs font-light"
          >
            Pay payroll
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TotalPayroll
