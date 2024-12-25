import React, { useEffect, useState } from "react";

export default function DropDownWithName({
  title,
  options,
  onChange,
  width,
  height,
  selected,
  disabled,
  loading,
  bgColor,
  border,
  fontWeight,
  name,
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
  border?: boolean;
  fontWeight?: boolean;
  name: string;
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
        name={name}
        value={selectedOption}
        onChange={handleChange}
        style={{
          width,
          height: height || "40px",
        }}
        className={`text-[#191414] text-[16px] py-1 capitalize
          ${title ? "font-[500]" : ""} ${selectedOption ? "font-[600]" : ""}
        } break-all rounded-[8px] ${
          border ? "border-[2px]" : "border-[1px]"
        } border-[#E4E4E7] outline-none focus:outline focus:border-[#5D5FEF] ${
          bgColor ? "bg-[#F9F9FE]" : "bg-[#FFFFFF]"
        }`}
      >
        <option
          value=""
          style={{
            fontWeight: fontWeight ? "500" : "600",
            color: "#2B425B",
            fontSize: "16px",
          }}
        >
          {title || "Select"}
        </option>
        {options.map((option: any, index: number) => (
          <option
            key={index}
            value={option.id || option._id}
            style={{
              fontWeight: fontWeight ? "500" : "600",
              color: "#2B425B",
              fontSize: "16px",
            }}
          >
            {option.name ||
              option.title ||
              option.value ||
              option.username ||
              option.machine_name}
          </option>
        ))}
      </select>
    </div>
  );
}
