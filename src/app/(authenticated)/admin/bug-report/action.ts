"use server"

import { createBugReport } from "@/resources/bugs/bugs.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { revalidateTag } from "next/cache";
import { z } from "zod";

enum BugModule {
    DASHBOARD = "dashboard",
    ORGANIZATION_SETTINGS = "organization-settings",
    USERS = "users",
    TEAMS = "teams",
    ACCESS_CONTROL = "access-control",
    CONFIGURATIONS = "configurations",
    TIME_TRACKER = "time-tracker",
    PROJECTS = "projects",
    TASKS = "tasks",
    BOARD = "board",
    REPORTS = "reports",
    EMAIL = "email",
    CLOUD_STORAGE = "cloud-storage",
    CALENDAR = "calendar",
    NOTES = "notes",
    HIRING = "hiring",
    LEAVES = "leaves",
    PAYROLL = "payroll",
    PERFORMANCE = "performance",
    NOTICE_BOARD = "notice-board",
    CRMS = "crms",
    SURVEY_TOOL = "survey-tool",
    COMMUNICATION_HUB = "communication-hub",
    SUBSCRIPTION_BILLING = "subscription-billing",
    CUSTOMER_SUPPORT = "customer-support",
}

enum OperatingSystem {
    WINDOWS = "Windows",
    MACOS = "macOS",
    LINUX = "Linux",
    OTHER = "Other",
}

enum Browser {
    CHROME = "Chrome",
    FIREFOX = "Firefox",
    SAFARI = "Safari",
    EDGE = "Edge",
    OPERA = "Opera",
    BRAVE = "Brave",
}

export const handleBugReportCreate = createFormHandler(
    z.object({
        title: z
            .string({ required_error: "Title is required" })
            .min(3, "Title cannot be empty"),
        description: z
            .string({ required_error: "Description is required" })
            .min(5, "Description cannot be empty"),
        reporterName: z.string().optional().describe("Reporter Information"),
        reporterEmail: z.string({ required_error: "Module is required" }).describe("Reporter Information"),
        module: z.nativeEnum(BugModule, { required_error: "Module is required" }),
        stepsToReproduce: z.string().min(1).optional(),
        expectedResult: z.string().min(1).optional(),
        actualResult: z.string().min(1).optional(),
        operatingSystem: z.nativeEnum(OperatingSystem).optional(),
        browser: z.nativeEnum(Browser).optional(),
        screenSize: z.string().optional(),
        pageLink: z
            .string()
            .url("Invalid URL format")
            .optional(),
        attachments: z.any().optional(),
    }),
    async ({ title, description, module, stepsToReproduce, expectedResult, actualResult, operatingSystem, browser, screenSize, pageLink, attachments, reporterEmail, reporterName }) => {
        const res = await createBugReport({
            title,
            description,
            module,
            stepsToReproduce,
            expectedResult,
            actualResult,
            operatingSystem,
            browser,
            screenSize,
            pageLink,
            attachments,
            reporterEmail,
            reporterName,
        }).catch(extractError);

        if (typeof res === "string") return { error: res };
        revalidateTag("bug_reports");
        return {};
    }
);
