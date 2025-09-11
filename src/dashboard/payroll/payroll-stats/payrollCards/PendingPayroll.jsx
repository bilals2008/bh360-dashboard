// File: src/dashboard/payroll/payroll-stats/payrollCards/PendingPayroll.jsx
import React from 'react'
import { Button } from "@/components/ui/button";
import { Clock } from 'lucide-react';
function PendingPayroll() {
  return (
    <div className="dashboard-card p-6 md:p-4 lg:p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="p-3 bg-warning/10 rounded-lg">
          <Clock className=" opacity-50 w-5 h-5 text-[#524feb]" />
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground font-light">
            No. of Employees:
            <span className="text-xs font-light text-warning"> 1</span>
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
        <div className="self-end md:self-center">
          <Button variant="none" className="text-xs font-light">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PendingPayroll
