import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function WelcomeModal({ setShow }: { setShow: any }) {
  const modalRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-0 bg-[#00000026] backdrop-blur-[2px] flex items-center justify-center z-40">
      <div
        ref={modalRef}
        className="w-full sm:w-[516px] h-full sm:h-[780px] max-h-screen bg-white rounded-[8px] shadow-lg flex flex-col justify-between"
      >
        <div className="overflow-auto p-6 border-b border-[#E5E9EB] flex flex-col items-center">
          <Image
            src="/images/welcome.gif"
            alt="Welcome"
            width={500}
            height={300}
            className="max-w-full h-auto"
          />
          <p className="text-[#292D32] text-[22px] font-[600] mt-4 text-center">
            WELCOME TO YOUR NEW WORKSPACE
          </p>
          <p className="text-[#6F6F6F] text-[14px] font-[500] mt-2 text-center">
            Your workspace is live and ready to go! Start inviting your team,
            creating tasks, and exploring all the tools designed to make your
            organization thrive.
          </p>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4 py-2 rounded-[8px] cursor-pointer text-center">
            Invite Team Members
          </div>
          <div className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4 py-2 rounded-[8px] cursor-pointer text-center">
            Create Project
          </div>
          <div
            onClick={() => setShow(false)}
            className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-4 py-2 rounded-[8px] cursor-pointer text-center"
          >
            Explore Dashboard
          </div>
        </div>
      </div>
    </div>
  );
}
