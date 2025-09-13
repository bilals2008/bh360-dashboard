// File: src/dashboard/EmployeeControlsBar/ExportBtn.jsx
import { DownloadCloudIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";


function ExportBtn() {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 px-4 py-2 text-sm "
    >
      Export CSV
      <DownloadCloudIcon className="w-4 h-4" />
    </Button>
  );
}

export default ExportBtn