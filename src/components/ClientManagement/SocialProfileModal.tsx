import DropDown from "@/components/Common/DropDown";
import { ModalCrossButton } from "@/svg/Crms/CommonModalIcons";
import React, { useEffect } from "react";

export default function SocialProfileModal({ setShow }: any) {
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
          className="w-[340px] lg:w-[450px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          <div className="">
            <div className="flex justify-between top-40 gap-12">
              <p className="text-[#191414] text-[20px] font-[600]">
                Add Social Profile
              </p>
              <div
                onClick={() => setShow(false)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
              >
                <ModalCrossButton />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-6 ">
            <div className="w-full">
              <p className="text-[#324054] text-[16px] font-[500] mb-2">
                Select Social Profile
              </p>
              <div className="">
                <DropDown
                  options={[
                    { id: 1, name: "Facebook" },
                    { id: 2, name: "Linkedin" },
                    { id: 3, name: "X" },
                  ]}
                  onChange={() => {}}
                  width="100%"
                />
              </div>
            </div>
            <div className="w-full">
              <p className="text-[#324054] text-[16px] font-[500] mb-2">
                Profile Link
              </p>
              <input
                type="text"
                className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-between gap-4">
            <div
              onClick={() => setShow(false)}
              className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[500] w-[48%] px-6 py-2 rounded-[8px] cursor-pointer"
            >
              <p className="text-center">Cancel</p>
            </div>
            <div className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[500] w-[48%] px-6 py-2 rounded-[8px] cursor-pointer">
              <p className="text-center">Add</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
