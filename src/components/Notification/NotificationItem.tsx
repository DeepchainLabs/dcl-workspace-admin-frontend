// import RoundedProfile from "@/svg/Others/RoundedProfile";
// import React from "react";
// import TypeBadge from "../Common/TypeBadge";

// interface NotificationItemProps {
//   data: {
//     id: number;
//     sender: string;
//     message: string;
//     type: string;
//     time: string;
//   };
//   bgColor?: string;
//   viewMode: "short" | "full";
// }

// const NotificationItem: React.FC<NotificationItemProps> = ({
//   data,
//   bgColor = "#F5F9FF",
//   viewMode,
// }) => {
//   const { id, sender, message, type, time } = data;

//   return (
//     <div
//       className="flex items-start gap-4 p-4 rounded-md"
//       style={{ backgroundColor: bgColor }}
//     >
//       <div>
//         <RoundedProfile />
//       </div>
//       <div className="flex-1">
//         <p
//           className={`text-[#292D32] text-[14px] font-[500]${
//             viewMode === "short" ? "line-clamp-1" : ""
//           }`}
//         >
//           <span className="font-[600]">{sender} </span>
//           {message}
//         </p>
//         <div className="flex justify-between items-center mt-2">
//           {type && (
//             <TypeBadge text={type} />
//           )}
//           <p className="text-[#6F6F6F] text-[14px] font-[500]">{time}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationItem;
"use client";

import React from "react";
import Link from "next/link";
import RoundedProfile from "@/svg/Others/RoundedProfile";
import TypeBadge from "../Common/TypeBadge";

interface INotification {
  _id: string;
  user: string;
  message: string;
  type: string;
  payload?: Record<string, any>;
  tenant?: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

interface NotificationItemProps {
  data: INotification;
  bgColor?: string;
  viewMode: "short" | "full";
}

function getNotificationLink(
  type: string,
  payload: Record<string, any> = {}
): string {
  switch (type) {
    case "NEW_SUBSCRIPTION":
      if (payload.subscription_id)
        return `./client-management/${payload.subscription_id}`;
    // return "./client-management";

    default:
      return "#";
  }
}

export default function NotificationItem({
  data,
  bgColor = "#F5F9FF",
  viewMode,
}: NotificationItemProps) {
  const { user, message, type, createdAt, payload = {} } = data;

  const time = new Date(createdAt).toLocaleString([], {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const linkHref = getNotificationLink(type, payload);

  return (
    <Link href={linkHref} className="block">
      <div
        className="flex items-start gap-4 p-4 rounded-md"
        style={{ backgroundColor: bgColor }}
      >
        <div>
          <RoundedProfile />
        </div>
        <div className="flex-1">
          <p
            className={`text-[#292D32] text-[14px] font-[500] ${
              viewMode === "short" ? "line-clamp-1" : ""
            }`}
          >
            <span className="font-[600]">{user} </span>
            {message}
          </p>
          <div className="flex justify-between items-center mt-2">
            {type && <TypeBadge text={type} />}
            <p className="text-[#6F6F6F] text-[14px] font-[500]">{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
