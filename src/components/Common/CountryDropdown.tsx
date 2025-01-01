"use client";
import { DropDownSVG } from "@/svg/survey-tools/SurveyPageSvg";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CountryOption {
  name: string;
  flag: string;
  code: string;
}

interface CountryDropdownProps {
  options: CountryOption[];
  value: string;
  onChange: (value: string) => void;
  title?: string;
  name?: string;
  width?: string;
  height?: string;
  selected?: string;
}

const CountryDropdown: React.FC<CountryDropdownProps> = ({
  options,
  onChange,
  title = "Select Country",
  width,
  name,
  height,
  selected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<CountryOption | null>(
    options.find((option) => option.code === selected) || null
  );

  const modalRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    const selectedObj = options.find((option) => option.code === selected);
    setSelectedOption(selectedObj || null);

    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selected, options]);

  const handleOptionClick = (option: CountryOption) => {
    setSelectedOption(option);
    onChange(option.code);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-5" style={{ width }}>
      <input type="hidden" name={name} value={selectedOption?.code || ""} />
      <div
        className={`border-[2px] rounded-[8px] py-5 px-4 flex justify-between items-center bg-[#FFFFFF] cursor-pointer ${
          isOpen ? "border-[#2377FC]" : "border-[#E4E4E7]"
        }`}
        style={{ height }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 py-4">
          {selectedOption ? (
            <>
              <Image
                src={selectedOption.flag}
                alt={`${selectedOption.name} Flag`}
                className="w-5 h-5 rounded-full"
              />
              <span className="text-[16px] font-[500] text-[#2B425B]">
                {selectedOption.name}
              </span>
            </>
          ) : (
            <span className="text-[16px] font-[500] text-[#000000]">
              {title}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <DropDownSVG />
        </div>
      </div>
      {isOpen && (
        <ul
          ref={modalRef}
          className="absolute p-2 w-full bg-white border border-[#E2E4E5] rounded-[12px] mt-1 shadow-lg overflow-y-auto cursor-pointer font-[500]"
        >
          {options.map((option) => (
            <li
              key={option.code}
              className="flex items-center gap-3 py-2 px-4 cursor-pointer border-b-[0.5px] border-[#E5E9EB] hover:bg-[#F0F5FF] transition-all"
              onClick={() => handleOptionClick(option)}
            >
              <Image
                src={option.flag}
                alt={`${option.name} Flag`}
                className="w-5 h-5 rounded-full"
              />
              <p className="text-[16px] font-[500] text-[#000000]">
                {option.name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
