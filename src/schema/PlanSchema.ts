import { z } from "zod";

const SubscriptionPeriod = z.enum(["MONTHLY", "YEARLY"]);

const PlanSchema = z.object({
  _id: z.string(),
  name: z.string().min(3),
  subscription_period: SubscriptionPeriod,
  description: z.string().optional(),
  category: z.string().optional(),
  free_for_first_month: z.boolean(),
  price: z.number(),
  is_recommended: z.boolean().default(false),
  employee_max: z.number(),
  team_max: z.number(),
  project_max: z.number(),
  task_manager: z.boolean().optional(),
  report_and_analysis: z.boolean().optional(),
  email: z
    .object({
      max_email_per_day: z.number(),
    })
    .optional(),
  cloud_storage: z
    .object({
      max_quote_in_gb: z.number(),
    })
    .optional(),
  calendar: z
    .object({
      event_management: z.boolean(),
    })
    .optional(),
  notes: z
    .object({
      ai_powered_intelligence: z.boolean(),
    })
    .optional(),
  hrms: z.boolean().optional(),
  crms: z
    .object({
      lead_management: z.boolean(),
      deal_management: z.boolean(),
    })
    .optional(),
  communication_hub: z
    .object({
      channels: z
        .object({
          channel_max: z.number(),
        })
        .optional(),
      calling: z
        .object({
          hours_per_day_max: z.number(),
        })
        .optional(),
      screen_sharing: z.boolean(),
    })
    .optional(),
  survey_tools: z
    .object({
      assessment_and_evaluation: z.boolean(),
    })
    .optional(),
});

type Plan = z.infer<typeof PlanSchema>;

export { PlanSchema };
export type { Plan };
