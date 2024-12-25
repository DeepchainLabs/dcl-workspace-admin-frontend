import React from "react";

function AddIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[16px] text-gray-400 cursor-pointer hover:text-blue-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
    );
}

export default AddIcon;
