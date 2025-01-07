"use client";

import { useState } from "react";

interface ToggleMiniProps {
  pairId?: string;
  onChange?: (pairId: string | undefined, checked: boolean) => void;
}

export default function ToggleMini({ id, checked, onChange }: any) {
  const handleToggleChange = () => {
    // setIsChecked(!isChecked);
    onChange(id, !checked);
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggleChange}
          className="sr-only"
        />

        {/* Switch board */}
        <div
          className={`t-block h-[16px] w-[26px] rounded-full ${
            checked ? "bg-[#2377FC]" : "bg-[#E6E0E9] border-2 border-[#79747E]"
          }`}
        ></div>

        {/* Switch knob */}
        <div
          className={`t-dot absolute md:left-1 md:top-1 top-0.5 left-0.5 flex h-[8.75px] w-[9px] items-center justify-center 
                      rounded-full transition-transform ${
                        checked ? "bg-white translate-x-full" : "bg-[#79747E]"
                      }`}
        ></div>
      </div>
    </label>
  );
}
