// File: src/layout/Header.jsx
import { ChevronDown } from "lucide-react";
import Logo from "../components/Header/Logo";
import GreetText from "../components/Header/GreetText";
import IconsMenu from "../components/Header/IconsMenu";
import AvatarSec from "../components/Header/AvatarSec";

export default function Header() {
  return (
    <header className="font-medium w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="p-2 flex items-center px-5 py-5">
        {/* Left side */}
        <div className="hidden lg:flex items-center gap-x-10">
          <Logo />
          <GreetText />
        </div>

        {/* Right side */}
        <div className="flex flex-1 items-center ml-auto lg:justify-end justify-between flex-row-reverse lg:flex-row text-gray-700">
          <IconsMenu />
          <AvatarSec />
        </div>
      </div>
    </header>
  );
}
