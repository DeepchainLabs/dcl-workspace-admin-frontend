"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

export default function MobileProfileMenu({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (show) {
      setIsOpen(true);
    }
  }, [show]);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, [setShow]);

  const modalRef = React.useRef<HTMLDivElement>(null);

  //check if clicked on outside of modalRef
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeMenu]);

  return (
    <div
      className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 overflow-y-hidden transition-transform duration-500 ease-in-out overflow-x-hidden"
      style={{ zIndex: "4" }}
    >
      <div
        className={`absolute top-0 bottom-0 w-screen h-screen transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ zIndex: "5", right: 0 }}
      >
        <div className="absolute top-0 right-0">
          <div
            ref={modalRef}
            className="w-[350px] md:w-[500px] h-screen bg-[#FFFFFF] px-6 py-4 overflow-y-auto scrollbar-none relative"
            style={{ zIndex: "5" }}
          >
            <div className="flex justify-end">
              <svg
                onClick={closeMenu}
                className="my-auto cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4914_101179)">
                  <path
                    d="M20.3644 11.2931C20.5519 11.4806 20.6572 11.7349 20.6572 12.0001C20.6572 12.2652 20.5519 12.5195 20.3644 12.7071L14.7074 18.3641C14.5188 18.5462 14.2662 18.647 14.004 18.6447C13.7418 18.6425 13.491 18.5373 13.3056 18.3519C13.1202 18.1665 13.015 17.9157 13.0128 17.6535C13.0105 17.3913 13.1113 17.1387 13.2934 16.9501L17.2434 13.0001H4.00044C3.73522 13.0001 3.48087 12.8947 3.29333 12.7072C3.1058 12.5196 3.00044 12.2653 3.00044 12.0001C3.00044 11.7348 3.1058 11.4805 3.29333 11.293C3.48087 11.1054 3.73522 11.0001 4.00044 11.0001H17.2434L13.2934 7.05006C13.1113 6.86146 13.0105 6.60885 13.0128 6.34666C13.015 6.08446 13.1202 5.83365 13.3056 5.64824C13.491 5.46283 13.7418 5.35766 14.004 5.35538C14.2662 5.35311 14.5188 5.4539 14.7074 5.63606L20.3644 11.2931Z"
                    fill="#09244B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4914_101179">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(-1 0 0 1 24 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="w-[64px] h-[64px] relative">
                <Image
                  src="/images/dummy_user.png"
                  fill
                  alt="Profile Picture"
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="mt-4 text-[#A5B2CA] text-[16px] font-[500] text-center">
              John Doe
            </p>
            <p className="mt-0 text-[#A5B2CA] text-[16px] font-[500] text-center">
              john@gmail.com
            </p>

            <div className="mt-8 border border-[#E5E9EB] rounded-[8px] w-full h-[48px] flex justify-between px-4">
              <div className="my-auto flex gap-3">
                <div className="w-[30px] h-[30px] relative">
                  <Image
                    src="/images/dummy_user.png"
                    alt="Profile"
                    fill
                    className="rounded-full"
                  />
                </div>
                <p className="text-[#6F6F6F] text-[14px] font-[600] my-auto">
                  adb@gmail.com
                </p>
              </div>
              <div className="my-auto">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50033 15.5834C12.3962 15.5834 15.5837 12.3959 15.5837 8.50002C15.5837 4.60419 12.3962 1.41669 8.50033 1.41669C4.60449 1.41669 1.41699 4.60419 1.41699 8.50002C1.41699 12.3959 4.60449 15.5834 8.50033 15.5834Z"
                    stroke="#15BD6D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.48926 8.50001L7.49384 10.5046L11.5101 6.49542"
                    stroke="#15BD6D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Link href={`/settings`}>
              <div className="mt-4 border border-[#E5E9EB] rounded-[8px] w-full h-[48px] flex px-4 cursor-pointer">
                <div className="my-auto flex gap-3">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.583 4.60419H11.333"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.25032 4.60419H1.41699"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.08366 7.08333C8.45287 7.08333 9.56283 5.97337 9.56283 4.60417C9.56283 3.23496 8.45287 2.125 7.08366 2.125C5.71445 2.125 4.60449 3.23496 4.60449 4.60417C4.60449 5.97337 5.71445 7.08333 7.08366 7.08333Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5833 12.3958H12.75"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.66699 12.3958H1.41699"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.91667 14.875C11.2859 14.875 12.3958 13.7651 12.3958 12.3959C12.3958 11.0266 11.2859 9.91669 9.91667 9.91669C8.54746 9.91669 7.4375 11.0266 7.4375 12.3959C7.4375 13.7651 8.54746 14.875 9.91667 14.875Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-[#6F6F6F] text-[14px] font-[600] my-auto leading-4 cursor-pointer">
                    Setings
                  </p>
                </div>
              </div>
            </Link>

            <div className="absolute bottom-[30px] left-[20px] right-[20px]">
              <div className="w-[100%]">
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
