import { formatPermission } from "@/utils/formatPermisssionsName.utils";
import React, { useEffect, useState } from "react";

export default function PermissionsDropDown({
  title,
  options,
  onChange,
  width,
  height,
  selected,
  disabled,
  loading,
  bgColor,
}: {
  title?: string;
  options: any;
  onChange: any;
  width: string;
  height?: string;
  selected?: any;
  disabled?: boolean;
  loading?: boolean;
  bgColor?: boolean;
}) {
  const [selectedOption, setSelectedOption] = useState<string>();

  useEffect(() => {
    setSelectedOption(selected || "");
  }, [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "") {
      setSelectedOption(event.target.value);
      onChange(event.target.value);
    }
  };

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleChange}
        style={{
          width,
          height: height || "40px",
        }}
        className={`text-[#191414] text-[16px] py-1 ${
          title || selectedOption ? "font-[600]" : "font-[500]"
        } break-all rounded-[8px] border-[1px] border-[#E4E4E7] outline-none focus:outline focus:border-[#5D5FEF] ${
          bgColor ? "bg-[#F9F9FE]" : "bg-[#FFFFFF]"
        }`}
      >
        <option
          value=""
          style={{
            fontWeight: "500",
            color: "#2B425B",
            fontSize: "16px",
          }}
        >
          {title || "Select"}
        </option>
        {options.map((option: any, index: number) => (
          <option
            key={index}
            value={option}
            style={{
              fontWeight: "600",
              color: "#2B425B",
              fontSize: "16px",
            }}
          >
            {formatPermission(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
