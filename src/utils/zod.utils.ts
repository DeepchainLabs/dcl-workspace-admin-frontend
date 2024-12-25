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

// export type PartialZodProperties<T extends ZodTypeAny> = Partial<
//   Record<keyof z.infer<T>, string | undefined>
// >;

export type PartialZodPropertiesWithError<
  T extends ZodTypeAny,
  Data,
> = Partial<{
  success?: boolean;
  error?: string;
  formErrors: Record<keyof z.infer<T>, string | undefined>;
  data?: Data;
}>;

export type ZFormHandler<T extends ZodTypeAny, Data> = (
  prevState: PartialZodPropertiesWithError<T, Data>,
  formData: FormData,
) => Promise<PartialZodPropertiesWithError<T, Data>>;

export const createFormHandler = <T extends ZodTypeAny, Data>(
  schema: T,
  handler: (
    data: z.output<T>,
    prevState: PartialZodPropertiesWithError<T, Data>,
    formData: FormData,
  ) =>
    | PartialZodPropertiesWithError<T, Data>
    | Promise<PartialZodPropertiesWithError<T, Data>>,
): ZFormHandler<T, Data> => {
  return async (prevState, formData) => {
    const rawData = Object.fromEntries(formData.entries());
    const data = Object.fromEntries(
      Object.entries(rawData)
        .filter(([_, v]) => !!v)
        .filter(([_, v]) => !(v instanceof File) || v.size > 0),
    );
    const validation = zodParse(schema, data);
    if ("errors" in validation) {
      return { formErrors: validation.errors, success: false };
    }
    const state = await handler(validation.data, prevState, formData);
    if ("success" in state) return state;
    return {
      ...state,
      success: !state.error,
    };
  };
};

export const followsSchema = <T extends z.ZodTypeAny>(
  value: any,
  schema: T,
): value is z.infer<T> => schema.safeParse(value).success;
