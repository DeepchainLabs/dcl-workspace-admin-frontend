"use client";

import useSocketEvent from "@/hooks/useSocketEvent";
import { revalidateSupportChats } from "@/resources/support/customer-support.service";

export default function RevalidateSupportChatEvent() {
  useSocketEvent("NEW_SUPPORT_MESSAGE", (args) => {
    console.log("New Support Message Event : ", args);
    const trigger = async () => {
      await revalidateSupportChats();
    }
    trigger();
  });

  return null;
}
