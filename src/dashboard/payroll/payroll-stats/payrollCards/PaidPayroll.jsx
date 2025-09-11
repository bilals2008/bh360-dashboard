// File: src/dashboard/payroll/payroll-stats/payrollCards/PaidPayroll.jsx
import { CheckCircle } from 'lucide-react';
import React from 'react'

function PaidPayroll() {
  return (
    <div className="dashboard-card p-6 md:p-4 lg:p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-success/10 rounded-lg">
          <CheckCircle className="w-5 h-5 text-success" />
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground font-light">
            No. of Employees:
            <span className="text-xs font-light text-success">145</span>
          </p>
        </div>
      </div>

      <p className="text-xs font-light text-muted-foreground mb-2">
        Paid payroll
      </p>
      <p className="text-xl font-light text-foreground mb-6">
        ₦4,850,000<span className="text-muted-foreground">.00</span>
      </p>
    </div>
  );
}

export default PaidPayroll