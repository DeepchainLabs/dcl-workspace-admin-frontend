'use client';

import { useEffect, useState } from 'react';

interface WorkspaceToggleProps {
  checked?: boolean
  pairId?: string;
  onChange?: (pairId: string | undefined, checked: boolean) => void;
}

export default function WorkspaceToggle({
  pairId,
  onChange,
  checked = false
}: WorkspaceToggleProps) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked])

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);

    if (onChange) {
      onChange(pairId, newChecked);
    }
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />

        {/* Switch board */}
        <div
          className={`t-block h-[13px] w-[22.5px] md:h-[26px] md:w-[45px] rounded-full ${
            isChecked
              ? 'bg-[#2377FC]'
              : 'bg-[#E6E0E9] border-2 border-[#79747E]'
          }`}
        ></div>

        {/* Switch knob */}
        <div
          className={`t-dot absolute md:left-1 md:top-1 top-0.5 left-0.5 flex h-[8.75px] w-[9px] md:h-[17.5px] md:w-[18px] items-center justify-center 
                      rounded-full transition-transform ${
                        isChecked
                          ? 'bg-white translate-x-full'
                          : 'bg-[#79747E]'
                      }`}
        >
          {isChecked ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.87555 6.5632L2.3118 4.99945L1.7793 5.5282L3.87555 7.62445L8.37555 3.12445L7.8468 2.5957L3.87555 6.5632Z"
                fill="#54595E"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.625 2.90375L7.09625 2.375L5 4.47125L2.90375 2.375L2.375 2.90375L4.47125 5L2.375 7.09625L2.90375 7.625L5 5.52875L7.09625 7.625L7.625 7.09625L5.52875 5L7.625 2.90375Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>
    </label>
  );
}