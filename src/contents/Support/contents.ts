import { z } from "zod";

export const availableTimeSlots = [
    {
        id: "10:00 AM - 11:00 AM",
        title: "10:00 AM - 11:00 AM",
    },
    {
        id: "11:00 AM - 12:00 PM",
        title: "11:00 AM - 12:00 PM",
    },
    {
        id: "12:00 PM - 1:00 PM",
        title: "12:00 PM - 1:00 PM",
    },
    {
        id: "1:00 PM - 2:00 PM",
        title: "1:00 PM - 2:00 PM",
    },
]

export const CategoryEnum = z.enum(["Bug", "Feature", "Support", "Other"]);
export const ServiceEnum = z.enum(["Service1", "Service2"]);