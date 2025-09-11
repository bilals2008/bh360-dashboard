import { Banknote, Clock, CheckCircle } from "lucide-react";
import React from "react";
import TotalPayroll from "./payrollCards/TotalPayroll";
import PendingPayroll from "./payrollCards/PendingPayroll";
import PaidPayroll from "./payrollCards/PaidPayroll";
function PayrollStats() {
  return (
    <div className="w-full p-2 bg-background">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr_1fr] gap-2">
        {/* Total Payroll Card */}
        <TotalPayroll />
        {/* Pending Payroll Card */}
        <PendingPayroll />
        {/* Paid Payroll Card */}
        <PaidPayroll />
      </div>
    </div>
  );
}

export default PayrollStats;
