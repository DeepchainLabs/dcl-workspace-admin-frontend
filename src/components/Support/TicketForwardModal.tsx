import DropDown from "@/components/Common/DropDown";
import Close from "@/svg/Subscription/Close";
import React, { useEffect } from "react";

export default function TicketForwardModal({ setShow }: any) {
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
          className="w-[340px] lg:w-[400px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          <div className="">
            <div className="flex justify-between top-40 gap-12">
              <p className="text-[#191414] text-[24px] font-[700]">Forward</p>
              <div
                onClick={() => setShow(false)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
              >
                <Close />
              </div>
            </div>
          </div>

          <div className="mt-4 mb-4 ">
            <div className="mt-4">
              <p className="text-[#6F6F6F] txet-[15px] font-[600] mb-2">
                Receiver&apos;s Email
              </p>
              <input
                type="text"
                className="w-full border border-[#E5E5E5] rounded-[8px] px-4 py-2 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
              />
            </div>
          </div>

          <div className="mt-10 flex justify-end gap-4">
            <button
              onClick={() => setShow(false)}
              className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-6 py-1.5 rounded-[8px] cursor-pointer"
            >
              Cancel
            </button>
            <button className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-6 py-1.5 rounded-[8px] cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
