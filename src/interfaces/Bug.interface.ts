export type BugReportResponse = {
    _id: string;
    title: string;
    bugId: string;
    description: string;
    module: string;
    reporterName: string;
    reporterEmail: string;
    stepsToReproduce: string;
    attachments: string[];
    attachments_urls: string[];
    expectedResult: string;
    actualResult: string;
    pageLink: string;
    operatingSystem: string;
    browser: string;
    screenSize: string;
    status: string;
    type: string;
    priority: string;
    verified_by: any;
    assign_to: any;
    estimatedTime: string;
    deleted_at: Date | null;
    deleted_by: any;
    created_at: Date;
    updated_at: Date;
};

export const BugStatuses = [
    { id: "To Do", title: "To Do" },
    { id: "In Progress", title: "In Progress" },
    { id: "Completed", title: "Completed" },
    { id: "Closed", title: "Closed" },
    { id: "On Hold", title: "On Hold" },
];

export const BugTypes = [
    { id: "Functional", title: "Functional" },
    { id: "Performance", title: "Performance" },
    { id: "UI/UX", title: "UI/UX" },
    { id: "Security", title: "Security" },
    { id: "Other", title: "Other" },
    { id: "Frontend", title: "Frontend" },
    { id: "Backend", title: "Backend" },
];

export const BugModules = [
    { id: "dashboard", title: "Dashboard" },
    { id: "organization settings", title: "Organization Settings" },
    { id: "users", title: "Users" },
    { id: "teams", title: "Teams" },
    { id: "access control", title: "Access Control" },
    { id: "configurations", title: "Configurations" },
    { id: "time tracker", title: "Time Tracker" },
    { id: "projects", title: "Projects" },
    { id: "tasks", title: "Tasks" },
    { id: "board", title: "Board" },
    { id: "reports", title: "Reports" },
    { id: "email", title: "Email" },
    { id: "cloud storage", title: "Cloud Storage" },
    { id: "calendar", title: "Calendar" },
    { id: "notes", title: "Notes" },
    { id: "hiring", title: "Hiring" },
    { id: "leaves", title: "Leaves" },
    { id: "payroll", title: "Payroll" },
    { id: "performance", title: "Performance" },
    { id: "notice board", title: "Notice Board" },
    { id: "crms", title: "CRMS" },
    { id: "survey tool", title: "Survey Tool" },
    { id: "communication hub", title: "Communication Hub" },
    { id: "subscription billing", title: "Subscription Billing" },
    { id: "customer support", title: "Customer Support" },
];

export const OperatingSystems = [
    { id: "Windows", title: "Windows" },
    { id: "macOS", title: "macOS" },
    { id: "Linux", title: "Linux" },
    { id: "Other", title: "Other" },
];

export const Browsers = [
    { id: "Chrome", title: "Chrome" },
    { id: "Firefox", title: "Firefox" },
    { id: "Safari", title: "Safari" },
    { id: "Edge", title: "Edge" },
    { id: "Opera", title: "Opera" },
    { id: "Brave", title: "Brave" },
];

export const BugPriorities = [
    { id: "Low", title: "Low" },
    { id: "Medium", title: "Medium" },
    { id: "High", title: "High" },
    { id: "Critical", title: "Critical" },
];

export const ScreenResolutions = [
    { id: "1920 x 1080", title: "1920 x 1080" },
    { id: "2560 x 1440", title: "2560 x 1440" },
    { id: "3840 x 2160", title: "3840 x 2160" },
    { id: "7680 x 4320", title: "7680 x 4320" },
    { id: "1280 x 720", title: "1280 x 720" },
    { id: "2048 x 1080", title: "2048 x 1080" },
    { id: "1600 x 900", title: "1600 x 900" },
    { id: "1366 x 768", title: "1366 x 768" },
    { id: "1024 x 768", title: "1024 x 768" },
    { id: "1280 x 800", title: "1280 x 800" },
    { id: "2560 x 1600", title: "2560 x 1600" },
    { id: "1440 x 900", title: "1440 x 900" }
];

