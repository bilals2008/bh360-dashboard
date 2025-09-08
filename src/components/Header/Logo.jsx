import React from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-8 h-8 bg-[#524feb] rounded-full flex items-center justify-center">
        <span className="text-white text-sm">BH</span>
      </div>
      <span className="text-xl  text-gray-800">BH.360</span>
    </div>
  );
}

export default Logo