"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MenuItems from "@/constants/menuItems";

export default function MobileNavMenu({
  setShow,
}: {
  setShow: (show: boolean) => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>();
  const [menuItems, setMenuItems] = useState(MenuItems);

  useEffect(() => {
    setIsOpen(true);

    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setTimeout(() => setShow(false), 500);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setShow]);

  const handleMenuItemClick = (menuItem: any) => {
    if (menuItem.title === selectedMenuItem?.title) {
      setSelectedMenuItem(undefined);
    } else {
      setSelectedMenuItem(menuItem);
    }
  };

  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 z-40">
      <div
        ref={modalRef}
        style={{ zIndex: "1" }}
        className={`transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-[260px] h-[calc(100vh)] bg-[#FFFFFF] rounded-r-[12px] `}
      >
        <div className="flex gap-3 my-auto border-b border-[#E5E9EB] py-4 pl-6">
          <svg
            className="my-auto"
            width="27"
            height="30"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5207 2.41163C13.6437 2.34057 13.7954 2.34057 13.9185 2.41163L24.279 8.3933C24.4021 8.46437 24.478 8.5957 24.478 8.73783V20.7012C24.478 20.8433 24.4021 20.9746 24.279 21.0457L13.9185 27.0274C13.7954 27.0984 13.6437 27.0984 13.5206 27.0274L3.16009 21.0457L2.21025 22.6909L3.16009 21.0457C3.037 20.9746 2.96118 20.8433 2.96118 20.7012V8.73783C2.96118 8.5957 3.037 8.46437 3.16009 8.3933L13.5207 2.41163Z"
              stroke="#2377FC"
              strokeWidth="3.97826"
            />
          </svg>
          <p className="text-[#292D32] text-[20px] sm:text-[22px] font-[500]">
            <span className="font-[700]">DCL</span> Workspace
          </p>
        </div>

        <div className="px-4 py-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon: any = item.icon;
            return (
              <div className="" key={index}>
                <div
                  onClick={() => handleMenuItemClick(item)}
                  className="flex justify-between w-full h-[48px] rounded-[8px] px-4 cursor-pointer group hover:bg-[#F0F5FF]"
                >
                  <div className="flex gap-3 my-auto">
                    <Icon className="my-auto group-hover:text-[#2377FC] stroke-[1.5px]" />
                    <p
                      className={`text-[#6F6F6F] text-[15px] group-hover:text-[#2377FC] font-[500]`}
                    >
                      {item?.title}
                    </p>
                  </div>
                  {item?.isExpandable && (
                    <svg
                      className={`my-auto fill-[#6E6E6E] group-hover:fill-[#2377FC] ${
                        item?.title === selectedMenuItem?.title
                          ? "rotate-180"
                          : ""
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3954_54652)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5893 13.0892C10.433 13.2454 10.2211 13.3332 10.0001 13.3332C9.77915 13.3332 9.56723 13.2454 9.41096 13.0892L4.69679 8.375C4.6172 8.29813 4.55371 8.20617 4.51004 8.1045C4.46636 8.00283 4.44338 7.89348 4.44241 7.78284C4.44145 7.67219 4.46254 7.56245 4.50444 7.46004C4.54634 7.35763 4.60822 7.26458 4.68646 7.18634C4.7647 7.10809 4.85775 7.04622 4.96016 7.00432C5.06257 6.96242 5.17231 6.94133 5.28296 6.94229C5.39361 6.94325 5.50296 6.96624 5.60463 7.00992C5.7063 7.05359 5.79825 7.11708 5.87512 7.19667L10.0001 11.3217L14.1251 7.19667C14.2823 7.04487 14.4928 6.96087 14.7113 6.96277C14.9298 6.96467 15.1388 7.05231 15.2933 7.20682C15.4478 7.36133 15.5355 7.57034 15.5374 7.78883C15.5393 8.00733 15.4553 8.21783 15.3035 8.375L10.5893 13.0892Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3954_54652">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
                {item?.isExpandable &&
                  item?.title === selectedMenuItem?.title && (
                    <div className="pl-4 space-y-1">
                      {item?.subItems.map((subItem, subIndex) => {
                        const SubIcon = subItem.icon;
                        return (
                          <Link
                            key={subIndex}
                            href={item?.route + subItem?.route}
                            className="flex justify-between w-full h-[40px] rounded-[8px] px-4 cursor-pointer group hover:bg-[#F0F5FF]"
                          >
                            <div className="flex gap-3 my-auto">
                              <div className="my-auto">
                                <SubIcon />
                              </div>
                              <p
                                className={`text-[#6F6F6F] text-[15px] group-hover:text-[#2377FC] font-[500]`}
                              >
                                {subItem?.title}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
