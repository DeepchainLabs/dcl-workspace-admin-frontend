'use server'

import { getFetch } from "@/config/axios-config";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const createClaim = async (data: {
    firstName: string;
    lastName: string;
    description: string;
    organizationEmail: string;
    phone: string;
    requiredAction: string;
    supportingDocuments?: File[];
    spaces?: string[];
}) => {
    const res = await getFetch(
        { url: `/claim`, method: "post", data, dataType: "FormData" },
        z.array(z.object({})),
    );
    revalidateTag("claims");
    return res;
};

export const getAllClaims = async () => {
    const res = await getFetch(
        { url: `/claim?sort=-_id`, method: "get", tags: ["claims"] },
        z.array(z.object({})),
    );
    return res;
};

export const getClaimById = async (id: string) => {
    const res = await getFetch(
        { url: `/claim/${id}`, method: "get", tags: ["claim"] },
        z.array(z.object({})),
    );
    return res;
};

export const updateClaim = async (id: string, data: {
    status?: string;
    requiredAction?: string,
    description?: string,
}) => {
    console.log(data);
    const res = await getFetch(
        { url: `/claim/${id}`, method: "patch", data },
        z.array(z.object({})),
    );
    console.log(res);
    revalidateTag("claims");
    return res;
};
