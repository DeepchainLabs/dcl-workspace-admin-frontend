export type ClaimResponse = {
    spaces: string[];
    _id: string;
    firstName: string;
    lastName: string;
    description: string;
    organizationEmail: string;
    phone: string;
    supportingDocuments: string[];
    status: string;
    requiredAction: "Transfer Ownership" | "Delete Organization";
    deleted_at: string | null;
    deleted_by: string | null;
    created_at: string;
    updated_at: string;
    __v: number;
    supportingDocuments_urls: string[];
};

export const ClaimStatusList = [
    { id: "Submitted", title: "Submitted" },
    { id: "Under Review", title: "Under Review" },
    { id: "Pending Documentation", title: "Pending Documentation" },
    { id: "Approved", title: "Approved" },
    { id: "Rejected", title: "Rejected" },
    { id: "Processing Payment", title: "Processing Payment" },
    { id: "Paid", title: "Paid" },
    { id: "Closed", title: "Closed" },
    { id: "On Hold", title: "On Hold" },
]

