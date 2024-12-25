import React from "react";

interface CircularProgressBarProps {
  progress: number; // Progress value (0-100)
  color: string; // Color for the progress bar (e.g., 'blue', 'red', etc.)
  title: string;
  icon: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  color,
  title,
  icon,
}) => {
  const strokeDashoffset = 220 - (220 * progress) / 100; // Adjusted stroke dash offset for progress

  return (
    <div className="relative w-28 h-20">
      {/* Circle background */}
      <svg className="absolute inset-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="35"
          className="stroke-gray-200"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Circle progress */}
      <svg className="absolute inset-0 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="35"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeDasharray="220"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>

      {/* Icon and progress text */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          {/* Icon */}
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.20065 11.8891C1.86671 11.8891 1.58094 11.7703 1.34334 11.5327C1.10574 11.2951 0.986733 11.0092 0.986328 10.6748V3.99603C0.986328 3.66209 1.10533 3.37632 1.34334 3.13872C1.58135 2.90111 1.86712 2.78211 2.20065 2.78171H4.6293V1.56738C4.6293 1.23344 4.7483 0.947672 4.98631 0.710069C5.22432 0.472466 5.51009 0.353463 5.84363 0.353058H8.27227C8.60621 0.353058 8.89219 0.472062 9.13019 0.710069C9.3682 0.948077 9.487 1.23385 9.4866 1.56738V2.78171H11.9152C12.2492 2.78171 12.5352 2.90071 12.7732 3.13872C13.0112 3.37673 13.13 3.6625 13.1296 3.99603V10.6748C13.1296 11.0088 13.0108 11.2947 12.7732 11.5327C12.5356 11.7707 12.2496 11.8895 11.9152 11.8891H2.20065ZM5.84363 2.78171H8.27227V1.56738H5.84363V2.78171Z"
              fill={color}
            />
          </svg>

          {/* Progress number */}
          <p className="text-[#000000] text-[16px] font-[700] mt-2">
            {progress}
          </p>
        </div>
      </div>

      <p className="text-[#52525B] text-[14px] font-[600] text-center">
        {title}
      </p>
    </div>
  );
};

export default CircularProgressBar;
