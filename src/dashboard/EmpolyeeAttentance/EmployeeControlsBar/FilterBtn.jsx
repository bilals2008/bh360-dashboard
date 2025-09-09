import { AlignCenter } from 'lucide-react';
import { Button } from "@/components/ui/button";
function FilterBtn() {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 px-4 py-2 text-sm  rounded-lg hover:bg-gray-50"
    >
      Filter
      <AlignCenter className="w-4 h-4" />
    </Button>
  );
}

export default FilterBtn