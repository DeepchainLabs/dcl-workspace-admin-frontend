"use server";
import { CategoryEnum, ServiceEnum } from "@/contents/Support/contents";
import { createCall, createTicket, deleteCall, getAvailableSlots, updateCall } from "@/resources/support/customer-support.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { revalidateTag } from "next/cache";
import toast from "react-hot-toast";
import { z } from "zod";

export const handleTicketCreate = createFormHandler(
    z.object({
        subject: z
            .string({ required_error: "Subject is required" })
            .min(4, "Subject is too short"),
        category: CategoryEnum,
        service: ServiceEnum,
        description: z
            .string({ required_error: "Description is required" }).min(10, "Description is too short"),
        attachment: z
            .any()
            .optional()
    }),
    async ({ subject, category, service, description, attachment }) => {
        // console.log("=============================", attachment);
        // console.log(subject, category, service, attachment);
        const res = await createTicket({ subject, category, service, description, attachment }).catch(
            extractError
        );
        if (typeof res === "string") return { error: res };
        revalidateTag("my_support_tickets");
        return {};
    }
)

export const handleCallCreate = createFormHandler(
    z.object({
        title: z
            .string({ required_error: "Title is required" })
            .min(4, "Title is too short"),
        time: z.string(),
        date: z.string(),
        reason: z
            .string({ required_error: "Reason is required" }).min(10, "Reason is too short"),
    }),
    async ({ title, time, reason, date }) => {
        // console.log(title, time, reason);
        const res = await createCall({ title, time, reason, date: new Date(date).toISOString() }).catch(
            extractError
        );
        if (typeof res === "string") return { error: res }
        revalidateTag("my_support_calls");
        revalidateTag("available_slots");
        return {};
    }
)

export const handleCallUpdate = createFormHandler(
    z.object({
        id: z.string(),
        title: z
            .string({ required_error: "Title is required" })
            .min(4, "Title is too short"),
        time: z.string(),
        date: z.string(),
        reason: z
            .string({ required_error: "Reason is required" }).min(10, "Reason is too short"),
    }),
    async ({ id, title, time, reason, date }) => {
        // console.log(title, time, reason);
        const res = await updateCall({ id, title, time, reason, date }).catch(
            extractError
        );

        if (typeof res === "string") return { error: res }
        revalidateTag("my_support_calls");
        revalidateTag("available_slots");
        return {};
    }
)

export const deleteSupportCall = async (id: string) => {
    const res = await deleteCall({ callId: id })
    if (typeof res === "string") return { error: res }
    revalidateTag("my_support_calls");
    revalidateTag("available_slots");
    return {};
}

export const fetchAvailableTimeslots = async (date: string, day: string) => {
    //console.log("Passed date: ",date)
    const res = await getAvailableSlots({ date, day })
    if (typeof res === "string") return { error: res }
    return res;
}