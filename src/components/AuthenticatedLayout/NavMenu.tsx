"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuItems from "@/constants/menuItems";

export default function NavMenu() {
  const pathname = usePathname();
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>();
  const [menuItems, setMenuItems] = useState(MenuItems);

  useEffect(() => {
    const activeItem = menuItems.find(
      (item) =>
        item.route === pathname ||
        (item.isExpandable &&
          item.subItems.some((subItem) =>
            pathname.startsWith(item.route + subItem.route)
          ))
    );
    if (activeItem) {
      setSelectedMenuItem(activeItem);
    }
  }, [pathname, menuItems]);

  const handleMenuItemClick = (menuItem: any) => {
    if (menuItem.title === selectedMenuItem?.title) {
      setSelectedMenuItem(undefined);
    } else {
      setSelectedMenuItem(menuItem);
    }
  };

  return (
    <div className="w-[240px] h-[calc(100vh-74px)] overflow-y-auto scrollbar-none border-r border-[#E5E9EB] px-2 py-4 space-y-2 hidden lg:block">
      {menuItems.map((item, index) => {
        const Icon: any = item.icon;
        const isSubItemActive = item.isExpandable
          ? item.subItems.some((subItem) =>
              pathname.startsWith(item.route + subItem.route)
            )
          : false;

        const isParentActive = item.route === pathname && !isSubItemActive;

        return (
          <div key={index}>
            {!item.isExpandable ? (
              <Link
                href={item.route}
                className={`flex justify-between w-full h-[48px] rounded-[8px] px-4 cursor-pointer group hover:bg-[#F0F5FF] ${
                  isParentActive ? "bg-[#F0F5FF]" : ""
                }`}
              >
                <div className="flex gap-3 my-auto">
                  <Icon
                    className={`my-auto group-hover:text-[#2377FC] stroke-[1.5px] ${
                      isParentActive ? "text-[#2377FC]" : "text-[#6F6F6F]"
                    }`}
                  />
                  <p
                    className={`text-[15px] font-[500] ${
                      isParentActive ? "text-[#2377FC]" : "text-[#6F6F6F]"
                    }`}
                  >
                    {item?.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div
                onClick={() => handleMenuItemClick(item)}
                className={`flex justify-between w-full h-[48px] rounded-[8px] px-4 cursor-pointer group hover:bg-[#F0F5FF] ${
                  isSubItemActive ? "" : isParentActive ? "bg-[#F0F5FF]" : ""
                }`}
              >
                <div className="flex gap-3 my-auto">
                  <Icon
                    className={`my-auto group-hover:text-[#2377FC] stroke-[1.5px] ${
                      isParentActive ? "text-[#2377FC]" : "text-[#6F6F6F]"
                    }`}
                  />
                  <p
                    className={`text-[15px] font-[500] ${
                      isParentActive ? "text-[#2377FC]" : "text-[#6F6F6F]"
                    }`}
                  >
                    {item?.title}
                  </p>
                </div>
                <svg
                  className={`my-auto fill-[#6E6E6E] group-hover:fill-[#2377FC] ${
                    item?.title === selectedMenuItem?.title ? "rotate-180" : ""
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
              </div>
            )}
            {item?.isExpandable && item?.title === selectedMenuItem?.title && (
              <div className="space-y-2 shadow-lg mx-2 py-4 px-2 rounded-[8px]">
                {item?.subItems.map((subItem, subIndex) => {
                  const SubIcon = subItem.icon;
                  const isSubActive = pathname.startsWith(
                    item.route + subItem.route
                  );
                  return (
                    <Link
                      key={subIndex}
                      href={item.route + subItem.route}
                      // href={item?.route + subItem?.route}
                      className={`flex justify-between w-full h-[40px] rounded-[8px] px-2 cursor-pointer group hover:bg-[#F0F5FF] ${
                        isSubActive ? "bg-[#F0F5FF]" : ""
                      }`}
                    >
                      <div className="flex gap-3 my-auto">
                        <div className="my-auto">
                          <SubIcon />
                        </div>
                        <p
                          className={`text-[15px] font-[500] ${
                            isSubActive ? "text-[#2377FC]" : "text-[#6F6F6F]"
                          }`}
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
  );
}
