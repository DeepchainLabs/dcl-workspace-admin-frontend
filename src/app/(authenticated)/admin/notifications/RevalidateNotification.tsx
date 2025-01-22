"use client";

import useSocketEvent from "@/hooks/useSocketEvent";
import { revalidateTag } from "next/cache";

export default function RevalidateNotification() {
  useSocketEvent("NOTIFICATION", (args) => {
    console.log("NOTIFICATION event triggered:", args);
    revalidateTag("notifications");
  });

  return null;
}
