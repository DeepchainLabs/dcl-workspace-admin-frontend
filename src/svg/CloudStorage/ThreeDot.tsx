import React from "react";

function ThreeDot({ isVertical }: { isVertical: boolean }) {
  return isVertical ? (
    <svg
      width="16"
      height="4"
      viewBox="0 0 16 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75676 3.33953C0.785371 3.33953 -0.00209844 2.59195 -0.00209839 1.66977C-0.00209835 0.747579 0.785371 -1.19343e-07 1.75676 -7.68823e-08C2.72816 -3.44214e-08 3.51562 0.747579 3.51562 1.66977C3.51562 2.59195 2.72816 3.33953 1.75676 3.33953Z"
        fill="#667085"
      />
      <ellipse
        cx="7.62004"
        cy="1.66977"
        rx="1.66977"
        ry="1.75886"
        transform="rotate(90 7.62004 1.66977)"
        fill="#667085"
      />
      <ellipse
        cx="13.4833"
        cy="1.66977"
        rx="1.66977"
        ry="1.75886"
        transform="rotate(90 13.4833 1.66977)"
        fill="#667085"
      />
    </svg>
  ) : (
    <svg
      width="4"
      height="16"
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33953 13.4854C3.33953 14.4568 2.59195 15.2443 1.66977 15.2443C0.747579 15.2443 0 14.4568 0 13.4854C0 12.514 0.747579 11.7266 1.66977 11.7266C2.59195 11.7266 3.33953 12.514 3.33953 13.4854Z"
        fill="#667085"
      />
      <ellipse
        cx="1.66977"
        cy="7.62214"
        rx="1.66977"
        ry="1.75886"
        fill="#667085"
      />
      <ellipse
        cx="1.66977"
        cy="1.75886"
        rx="1.66977"
        ry="1.75886"
        fill="#667085"
      />
    </svg>
  );
}

export default ThreeDot;
