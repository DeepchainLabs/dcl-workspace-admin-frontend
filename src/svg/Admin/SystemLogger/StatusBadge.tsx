import React from "react";

const Failed = ({ color = "#991B1B" }: { color?: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.99935 12.8334C10.2077 12.8334 12.8327 10.2084 12.8327 7.00008C12.8327 3.79175 10.2077 1.16675 6.99935 1.16675C3.79102 1.16675 1.16602 3.79175 1.16602 7.00008C1.16602 10.2084 3.79102 12.8334 6.99935 12.8334Z"
      stroke="#991B1B"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 4.66675V7.58341"
      stroke="#991B1B"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.99609 9.33325H7.00133H6.99609Z"
      fill="#991B1B"
    />
    <path
      d="M6.99609 9.33325H7.00133"
      stroke="#991B1B"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Warning = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.4166 5.83325H7.58327V8.74992H6.4166V5.83325ZM6.41602 9.33325H7.58268V10.4999H6.41602V9.33325Z"
        fill="#92400E"
      />
      <path
        d="M8.03054 2.45007C7.82755 2.06798 7.43204 1.83057 6.99921 1.83057C6.56638 1.83057 6.17088 2.06798 5.96788 2.45065L1.68738 10.5374C1.59262 10.7151 1.5457 10.9143 1.55122 11.1156C1.55674 11.3168 1.61452 11.5132 1.71888 11.6854C1.82178 11.8584 1.96812 12.0016 2.1434 12.1006C2.31868 12.1997 2.5168 12.2512 2.71813 12.2501H11.2803C11.6933 12.2501 12.0672 12.0389 12.2801 11.6854C12.3845 11.5132 12.4423 11.3168 12.4478 11.1156C12.4533 10.9143 12.4064 10.7151 12.3116 10.5374L8.03054 2.45007ZM2.71813 11.0834L6.99921 2.99665L11.2832 11.0834H2.71813Z"
        fill="#92400E"
      />
    </svg>
  );
};
const Debug = () => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5827 8.75008V6.96391C11.5824 6.35486 11.3403 5.77084 10.9097 5.34012C10.4791 4.9094 9.89515 4.66721 9.2861 4.66675H5.71202C5.10307 4.66737 4.51925 4.90962 4.08877 5.34033C3.65829 5.77103 3.41632 6.35496 3.41602 6.96391V8.75008C3.41602 9.28631 3.52163 9.81729 3.72684 10.3127C3.93205 10.8081 4.23282 11.2583 4.612 11.6374C4.99117 12.0166 5.44131 12.3174 5.93672 12.5226C6.43214 12.7278 6.96312 12.8334 7.49935 12.8334C8.03558 12.8334 8.56656 12.7278 9.06197 12.5226C9.55739 12.3174 10.0075 12.0166 10.3867 11.6374C10.7659 11.2583 11.0667 10.8081 11.2719 10.3127C11.4771 9.81729 11.5827 9.28631 11.5827 8.75008Z"
        stroke="#4157FE"
      />
      <path
        d="M10.125 4.95833V4.375C10.125 3.67881 9.84844 3.01113 9.35615 2.51884C8.86387 2.02656 8.19619 1.75 7.5 1.75C6.80381 1.75 6.13613 2.02656 5.64384 2.51884C5.15156 3.01113 4.875 3.67881 4.875 4.375V4.95833"
        stroke="#4157FE"
      />
      <path
        d="M11.5827 8.16675H13.3327M3.41602 8.16675H1.66602M8.95768 2.04175L10.416 1.16675M6.04102 2.04175L4.58268 1.16675M12.4577 11.6667L11.291 11.2001M12.4577 4.66675L11.291 5.13341M2.54102 11.6667L3.70768 11.2001M2.54102 4.66675L3.70768 5.13341M7.49935 12.5417V8.75008"
        stroke="#4157FE"
        stroke-linecap="round"
      />
    </svg>
  );
};
const Info = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00065 1.16659C3.79232 1.16658 1.16732 3.79158 1.16732 6.99992C1.16732 10.2083 3.79232 12.8333 7.00065 12.8333C10.209 12.8333 12.834 10.2083 12.834 6.99992C12.834 3.79159 10.209 1.16659 7.00065 1.16659Z"
        stroke="#1271A2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 9.33325L7 6.41659"
        stroke="#1271A2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.00391 4.66675L6.99867 4.66675"
        stroke="#1271A2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const iconMap = {
  failed: Failed,
  info: Info,
  warning: Warning,
  debug: Debug,
};

function getCategoryFromStatusCode(status_code: number): keyof typeof iconMap {
  if (status_code >= 400) return "failed";
  if (status_code >= 300) return "warning";
  if (status_code >= 200) return "info";
  return "debug";
}

export default function StatusBadge({ status_code }: { status_code: number }) {
  const category = getCategoryFromStatusCode(status_code);

  let bgColor = "bg-[#FEE2E2]";
  let borderColor = "border-[#991B1B]";
  let textColor = "text-[#991B1B]";
  let iconColor = "#991B1B";
  let text = "Unknown";

  switch (category) {
    case "warning":
      text = "Warning";
      bgColor = "bg-[#FFEFD6]";
      borderColor = "border-[#FF9F00]";
      textColor = "text-[#92400E]";
      iconColor = "#D97706";
      break;
    case "failed":
      text = "Failed";
      bgColor = "bg-[#FEE2E2]";
      borderColor = "border-[#991B1B]";
      textColor = "text-[#991B1B]";
      iconColor = "#D97706";
      break;
    case "debug":
      text = "Debug";
      bgColor = "bg-[#F2F9FE]";
      borderColor = "border-[#4157FE]";
      textColor = "text-[#4157FE]";
      iconColor = "#2563EB";
      break;
    case "info":
      text = "Info";
      bgColor = "bg-[#EAF8FF]";
      borderColor = "border-[#3FB8F7]";
      textColor = "text-[#1271A2]";
      iconColor = "#0284C7";
      break;
  }

  const Icon = iconMap[category];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium ${bgColor} border-2 ${borderColor} ${textColor}`}
    >
      <Icon color={iconColor} />
      {text}
    </span>
  );
}
