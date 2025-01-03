import React from "react";

function StepPill({active}: {active: boolean}) {
  return (
    <svg
      width="100"
      height="8"
      viewBox="0 0 100 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="8" rx="4" fill= {active ? "#2377FC" : "#EBEBEB"} />
    </svg>
  );
}

export default StepPill;
