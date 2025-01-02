import React, { useEffect } from "react";

export default function AddPermissionModal({ setShow }: any) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setShow]);

  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 z-40">
      <div className="grid place-items-center w-[calc(100vw)] h-[calc(100vh)]">
        <div
          ref={modalRef}
          className="w-[340px] lg:w-[500px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          <div className="">
            <div className="flex justify-between top-40 gap-12">
              <p className="text-[#191414] text-[20px] font-[600]">
                Create New Permission
              </p>
              <div
                onClick={() => setShow(false)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="#667085"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-6 ">
            <div className="w-full">
              <p className="text-[#324054] text-[16px] font-[500] mb-2">
                Permission Name
              </p>
              <input
                type="text"
                className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
              />
            </div>
            <div className="w-full">
              <p className="text-[#324054] text-[16px] font-[500] mb-2">
                Module Name
              </p>
              <input
                type="text"
                className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <div
              onClick={() => setShow(false)}
              className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[500] px-4 py-1.5 rounded-[8px] cursor-pointer"
            >
              Cancel
            </div>
            <div className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[500] px-4 py-1.5 rounded-[8px] cursor-pointer">
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
