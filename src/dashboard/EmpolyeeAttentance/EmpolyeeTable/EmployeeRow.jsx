// File: src/dashboard/EmpolyeeAttentance/EmpolyeeTable/EmployeeRow.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getEmploymentTypeBadgeClasses, getStatusBadgeClasses } from "./utils";

const EmployeeRow = ({ employee }) => {
  return (
    <tr className="table-row text-[#000]/70! border-b border-border">
      <td className="table-cell">{employee.date}</td>

      {/* Avatar + Name */}
      <td className="table-cell">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border border-muted shadow-sm">
            <AvatarImage src={employee.avatar || ""} alt={employee.name} />
            <AvatarFallback>{employee.initials}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{employee.name}</span>
        </div>
      </td>

      {/* Other Fields */}
      <td className="table-cell ">{employee.role}</td>
      <td className="table-cell">
        <span
          className={getEmploymentTypeBadgeClasses(employee.employmentType)}
        >
          {employee.employmentType}
        </span>
      </td>
      <td className="table-cell">
        <span className={getStatusBadgeClasses(employee.status)}>
          {employee.status}
        </span>
      </td>
      <td className="table-cell">{employee.checkIn}</td>
      <td className="table-cell">{employee.checkOut}</td>
      <td className="table-cell">{employee.overTime}</td>
    </tr>
  );
};

export default EmployeeRow;
