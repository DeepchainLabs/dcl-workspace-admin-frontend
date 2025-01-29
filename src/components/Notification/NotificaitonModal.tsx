// import { notifications } from "@/contents/Notification/Data";
// import Close from "@/svg/Subscription/Close";
// import React, { useEffect, useState } from "react";
// import NotificationItem from "./NotificationItem";
// import DoubleCheckSvg from "@/svg/Others/DoubleCheckSvg";

// export default function NotificationModal({ setShow }: any) {
//   const [selected, setSelected] = useState<"viewAll" | "mentions">("viewAll");
//   const [viewMode, setViewMode] = useState("short");
//   const modalRef = React.useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: any) {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setShow(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [modalRef, setShow]);

//   return (
//     <div className="fixed inset-0 z-40 bg-[#00000026] backdrop-blur-[1px]">
//       <div
//         ref={modalRef}
//         className={`absolute top-[100px] right-0 sm:top-[80px] sm:right-[20px] lg:top-[60px] lg:right-[90px] ${
//           viewMode === "short"
//             ? "w-full max-w-[340px] sm:max-w-[487px]"
//             : "w-full max-w-[773px]"
//         } h-[580px] sm:h-[600px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-3`}
//       >
//         <div className="sticky top-0 bg-[#FFFFFF] z-10">
//           <div className=" border-b border-[#E5E9EB]">
//             <div className="flex justify-between gap-12 p-2">
//               <p className="text-[#191414] text-[20px] font-[600]">
//                 Notifications
//               </p>
//               <div
//                 onClick={() => setShow(false)}
//                 className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer"
//               >
//                 <Close />
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-4 mt-4">
//             <button
//               onClick={() => setSelected("viewAll")}
//               className={`px-4 py-1.5 text-[16px] font-[500] cursor-pointer border-b-2 ${
//                 selected === "viewAll"
//                   ? "text-[#2377FC] border-[#2377FC]"
//                   : "text-[#292D32] border-transparent"
//               }`}
//             >
//               View All
//             </button>
//             <button
//               onClick={() => setSelected("mentions")}
//               className={`px-4 py-1.5 text-[16px] font-[500] cursor-pointer border-b-2 ${
//                 selected === "mentions"
//                   ? "text-[#2377FC] border-[#2377FC]"
//                   : "text-[#292D32] border-transparent"
//               }`}
//             >
//               Mentions
//             </button>
//           </div>
//         </div>

//         <div className="mt-6 h-[375px] overflow-y-auto">
//           {notifications.map((notification, index) => {
//             return (
//               <div key={notification.id} className="mb-2">
//                 <NotificationItem
//                   data={notification}
//                   bgColor={index % 2 !== 0 ? "#F0F5FF" : "#FFFFFF"}
//                   viewMode="short"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-2 flex flex-wrap justify-center md:justify-between items-center px-4 border-t-2 border-[#E5E9EB] pt-2 gap-2 sm:gap-4">
//           <button className="bg-transparent text-[#2377FC] text-[14px] sm:text-[16px] font-[500] px-4 sm:px-6 py-1.5 rounded-[8px] cursor-pointer">
//             <div className="flex gap-2 sm:gap-4 items-center">
//               <DoubleCheckSvg />
//               <span>Mark all as Read</span>
//             </div>
//           </button>
//           <button
//             onClick={() => {
//               if (viewMode === "short") {
//                 setViewMode("full");
//               } else {
//                 setViewMode("short");
//               }
//             }}
//             className="bg-[#2377FC] text-[#FFFFFF] text-[14px] sm:text-[16px] font-[500] px-2 sm:px-3 py-2 rounded-[8px] cursor-pointer"
//           >
//             {viewMode === "short"
//               ? "View all Notifications"
//               : "Hide all Notificaitons"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Close from "@/svg/Subscription/Close";
import DoubleCheckSvg from "@/svg/Others/DoubleCheckSvg";
import NotificationItem from "./NotificationItem";
import NotificationSkeleton from "./NotificationSkeleton";
import { fetchNotifications } from "@/resources/notification/notification.service";

interface NotificationModalProps {
  setShow: (show: boolean) => void;
}

export default function NotificationModal({ setShow }: NotificationModalProps) {
  const [selected, setSelected] = useState<"viewAll" | "mentions">("viewAll");
  const [viewMode, setViewMode] = useState<"short" | "full">("short");
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const modalRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setShow]);

  const loadNotifications = async (limit: number) => {
    setIsLoading(true);
    try {
      const data = await fetchNotifications(limit);
      setNotifications(data);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNotifications(10);
  }, []);

  const handleToggleViewMode = () => {
    if (viewMode === "short") {
      setViewMode("full");
      loadNotifications(0);
    } else {
      setViewMode("short");
      loadNotifications(10);
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#00000026] backdrop-blur-[1px]">
      <div
        ref={modalRef}
        className={`absolute top-[100px] right-0 sm:top-[80px] sm:right-[20px] lg:top-[60px] lg:right-[90px] ${
          viewMode === "short"
            ? "w-full max-w-[340px] sm:max-w-[487px]"
            : "w-full max-w-[773px]"
        } h-[580px] sm:h-[600px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-3`}
      >
        <div className="sticky top-0 bg-[#FFFFFF] z-10">
          <div className="border-b border-[#E5E9EB]">
            <div className="flex justify-between gap-12 p-2">
              <p className="text-[#191414] text-[20px] font-[600]">
                Notifications
              </p>
              <div
                onClick={() => setShow(false)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer"
              >
                <Close />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setSelected("viewAll")}
              className={`px-4 py-1.5 text-[16px] font-[500] cursor-pointer border-b-2 ${
                selected === "viewAll"
                  ? "text-[#2377FC] border-[#2377FC]"
                  : "text-[#292D32] border-transparent"
              }`}
            >
              View All
            </button>
            <button
              onClick={() => setSelected("mentions")}
              className={`px-4 py-1.5 text-[16px] font-[500] cursor-pointer border-b-2 ${
                selected === "mentions"
                  ? "text-[#2377FC] border-[#2377FC]"
                  : "text-[#292D32] border-transparent"
              }`}
            >
              Mentions
            </button>
          </div>
        </div>

        <div className="mt-6 h-[375px] overflow-y-auto">
          {isLoading ? (
            <NotificationSkeleton count={5} />
          ) : notifications && notifications.length ? (
            notifications.map((notification, index) => (
              <NotificationItem
                key={notification._id}
                data={notification}
                bgColor={index % 2 !== 0 ? "#F0F5FF" : "#FFFFFF"}
                viewMode={viewMode}
              />
            ))
          ) : (
            <div className="text-center">No Notifications Found</div>
          )}
        </div>

        <div className="mt-2 flex flex-wrap justify-center md:justify-between items-center px-4 border-t-2 border-[#E5E9EB] pt-2 gap-2 sm:gap-4">
          <button className="bg-transparent text-[#2377FC] text-[14px] sm:text-[16px] font-[500] px-4 sm:px-6 py-1.5 rounded-[8px] cursor-pointer">
            <div className="flex gap-2 sm:gap-4 items-center">
              <DoubleCheckSvg />
              <span>Mark all as Read</span>
            </div>
          </button>
          <button
            onClick={handleToggleViewMode}
            className="bg-[#2377FC] text-[#FFFFFF] text-[14px] sm:text-[16px] font-[500] px-2 sm:px-3 py-2 rounded-[8px] cursor-pointer"
          >
            {viewMode === "short"
              ? "View all Notifications"
              : "Hide all Notifications"}
          </button>
        </div>
      </div>
    </div>
  );
}
