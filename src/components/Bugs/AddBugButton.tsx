import BugSvg from "@/svg/Bugs/BugSvg";
import Link from "next/link";
import React from "react";

function AddBugButton() {
  return (
    <Link href={"/admin/bug-report"} className="my-auto">
      <button
        // onClick={() => setShownewCouponModal(true)}
        className="flex gap-2 bg-[#2377FC] text-[#F0F5FF] w-full  px-4 py-2 rounded-[8px] font-[600] text-[14px]"
      >
        <div className="my-auto">
          <BugSvg />
        </div>
        Report a Bug
      </button>
    </Link>
  );
}

export default AddBugButton;
