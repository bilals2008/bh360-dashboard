// File: src/dashboard/EmployeeControlsBar/SearchBAr.jsx
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input";

function SearchBAr() {
  return (
    <div className="relative flex-1 mx-auto md:mx-0 max-w-sm">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4" />
             <Input
               type="text"
               placeholder="Search by name, role, department..."
               className="w-full pl-10 pr-4 py-2  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             />
             <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs  bg-muted  rounded">
               ⌘ K
             </kbd>
           </div>
  )
}

export default SearchBAr