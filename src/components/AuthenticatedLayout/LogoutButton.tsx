import { handleLogOut } from "@/app/(authenticated)/admin/actions";
import React, { useActionState } from "react";

export default function LogoutButton() {
  const [errors, action, isPending] = useActionState(handleLogOut, {});

  return (
    <form action={action} className="absolute bottom-4 left-0 right-0">
      <button
        type="submit"
        className={`bg-[#2377FC] w-[94%] flex justify-center gap-2 px-4 py-2 rounded-[8px] cursor-pointer mx-4 ${
          isPending ? "opacity-50" : ""
        }`}
        disabled={isPending}
      >
        <svg
          className="my-auto"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0801 10.965L15.0001 9.045L13.0801 7.125"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.32031 9.04504H14.9478"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.82031 15C5.50531 15 2.82031 12.75 2.82031 9C2.82031 5.25 5.50531 3 8.82031 3"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-[#FFFFFF] text-[15px] font-[600]">
          {isPending ? "Logging out..." : "Logout"}
        </p>
      </button>
    </form>
  );
}
