"use server"
import { changeAssignee, changePriority, changeService, changeStatus, createSupportNote, createTicket, deleteNote, updateNote } from "@/resources/support/customer-support.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const handleCreateNote = createFormHandler(
    z.object({
        text: z
            .string({ required_error: "Note content is required" })
            .min(5, "Content is too short"),
        ticket: z.string({ required_error: "Ticket object id required" }),
        isUpdate: z.string(),
        noteId: z.string().optional()
    }),
    async ({ text, ticket, isUpdate, noteId }) => {
        // console.log(text, ticket, isUpdate);
        let res = null;
        if (isUpdate == "true") {
            if (noteId) {
                res = await updateNote({ text, noteId }).catch(
                    extractError
                );
            }
        }
        else {
            res = await createSupportNote({ text, ticket }).catch(
                extractError
            );
        }
        if (typeof res === "string") return { error: res };
        revalidateTag("support_notes");
        return {};
    }
)

export const deleteSupportNote = async (noteId: string) => {
    const res = await deleteNote({ noteId })
    if (typeof res === "string") return { error: res };
    revalidateTag("support_notes");
    return {};
}

export const changeTicketStatus = async (id: string, status: string, tenant: string) => {
    console.log("changeTicketStatus", id, status, tenant);
    const res = await changeStatus({ id, status, tenant })
    if (typeof res === "string") return { error: res };
    revalidateTag("my_support_tickets");
    return {};
}
export const changeTicketService = async (id: string, service: string, tenant: string) => {
    const res = await changeService({ id, service, tenant })
    if (typeof res === "string") return { error: res };
    revalidateTag("my_support_tickets");
    return {};
}
export const changeTicketPriority = async (id: string, priority: string, tenant: string) => {
    const res = await changePriority({ id, priority, tenant })
    if (typeof res === "string") return { error: res };
    revalidateTag("my_support_tickets");
    return {};
}
export const changeTicketAssignee = async (id: string, user: string, tenant: string) => {
    const res = await changeAssignee({ id, user, tenant })
    if (typeof res === "string") return { error: res };
    revalidateTag("my_support_tickets");
    return {};
}

