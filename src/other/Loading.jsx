// File: src/other/Loading.jsx
import React from 'react'

function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  px-4">
      <span className="loading loading-bars size-15 md:size-23"></span>
      <span className="mt-4 text-base md:text-2xl text-primary font-light text-center">Loading...</span>
    </div>
  );
}

export default Loading

