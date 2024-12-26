import { ZodError, ZodTypeAny, z } from "zod";

export const zodErrorToFormError = (error: ZodError) =>
  Object.fromEntries(
    Object.entries(error.flatten().fieldErrors)
      .map(([k, v]) => [k, v?.join(", ")])
      .filter(([_, v]) => !!v),
  ) as Record<string, string>;

export const zodParse = <T extends ZodTypeAny>(
  schema: T,
  data: unknown,
): { data: z.infer<T> } | { errors: Record<keyof z.infer<T>, string> } => {
  try {
    return { data: schema.parse(data) };
  } catch (error) {
    if (error instanceof ZodError) {
      // console.log({ error });
      return { errors: zodErrorToFormError(error) as any };
    } else throw error;
  }
};

export type PartialZodPropertiesWithError<
  FormDataSchema extends ZodTypeAny,
  ResponseData,
> = Partial<{
  success?: boolean;
  error?: string;
  formErrors: Record<keyof z.infer<FormDataSchema>, string | undefined>;
  data?: ResponseData;
  lastSubmittedData: z.infer<FormDataSchema>;
}>;

export type ZFormHandler<FormDataSchema extends ZodTypeAny, ResponseData> = (
  prevState: PartialZodPropertiesWithError<FormDataSchema, ResponseData>,
  formData: FormData,
) => Promise<PartialZodPropertiesWithError<FormDataSchema, ResponseData>>;

export const createFormHandler = <
  FormDataSchema extends ZodTypeAny,
  ResponseData,
>(
  schema: FormDataSchema,
  handler: (
    data: z.output<FormDataSchema>,
    prevState: PartialZodPropertiesWithError<FormDataSchema, ResponseData>,
    formData: FormData,
  ) =>
    | PartialZodPropertiesWithError<FormDataSchema, ResponseData>
    | Promise<PartialZodPropertiesWithError<FormDataSchema, ResponseData>>,
): ZFormHandler<FormDataSchema, ResponseData> => {
  return async (prevState, formData) => {
    const rawData = Object.fromEntries(formData.entries());
    const data = Object.fromEntries(
      Object.entries(rawData)
        .filter(([_, v]) => !!v)
        .filter(([_, v]) => !(v instanceof File) || v.size > 0),
    );
    const validation = zodParse(schema, data);
    if ("errors" in validation) {
      return {
        formErrors: validation.errors,
        success: false,
        lastSubmittedData: data,
      };
    }
    const state = await handler(validation.data, prevState, formData);
    if ("success" in state)
      return {
        ...state,
        lastSubmittedData: data,
      };
    return {
      ...state,
      success: !state.error,
      lastSubmittedData: data,
    };
  };
};

export const followsSchema = <T extends z.ZodTypeAny>(
  value: any,
  schema: T,
): value is z.infer<T> => schema.safeParse(value).success;

export const modifyPayload =
  (
    action: (payload: FormData) => void,
    update: Record<
      string,
      string | Blob | { blobValue: Blob; filename?: string }
    > = {},
  ) =>
  (payload: FormData) => {
    for (const key in update) {
      const val = update[key];
      if (typeof val === "object" && "blobValue" in val)
        payload.set(key, val.blobValue, val.filename);
      else payload.set(key, val);
    }
    action(payload);
  };
