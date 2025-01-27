import React from "react";

function FolderIcon({color = "#FFFFFF"} : {color?: string}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80229 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z"
        fill={color}
      />
      <path
        d="M20.9834 10.75C21.5343 10.75 21.9815 11.1957 21.9834 11.7466L22 16.6503C22 19.6003 19.6 22.0003 16.65 22.0003H7.35C4.4 22.0003 2 19.6003 2 16.6503V11.7503C2 11.198 2.44771 10.7503 2.99999 10.7503L20.9834 10.75Z"
        fill={color}
      />
    </svg>
  );
}

export default FolderIcon;
