import { getFetch } from "@/config/axios-config";
import { z } from "zod";

export const getTenants = async (ids: string[]) => {
    const queryParams = ids.map(id => `_id=${id}`).join("&");
    const res = await getFetch(
        { url: `/admin/tenants/?${queryParams}`, method: "get" },
        z.array(z.object({}))
    );
    return res;
};
