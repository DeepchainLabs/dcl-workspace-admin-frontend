"use server";

import { updateRefundStatus } from "@/resources/payment/payment.service";

export async function acceptRefundAction(
  refundId: string,
  cancelRunningSubscription: boolean
) {
  return await updateRefundStatus(
    refundId,
    "ACCEPTED",
    cancelRunningSubscription
  );
}

export async function rejectRefundAction(refundId: string) {
  return await updateRefundStatus(refundId, "REJECTED", false);
}
