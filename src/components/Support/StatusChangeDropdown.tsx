"use client";
import React from "react";
import DropDown from "../Common/DropDown";

function StatusChangeDropdown() {
  return (
    <div>
      <div className="w-[150px]">
        <DropDown
          selected={1}
          options={[
            { id: 1, name: "Open" },
            { id: 2, name: "Close" },
          ]}
          onChange={() => {}}
          width="100%"
          height="35px"
        />
      </div>
    </div>
  );
}

export default StatusChangeDropdown;
