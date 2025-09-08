import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarSec() {
  return (
    <div className="lg:pl-6 flex items-center justify-center gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
        <AvatarFallback>BH</AvatarFallback>
      </Avatar>
      <ChevronDown size={17} className="text-violet-400" />
    </div>
  );
}

export default AvatarSec