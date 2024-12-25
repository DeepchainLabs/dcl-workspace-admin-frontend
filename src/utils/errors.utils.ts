import toast from "react-hot-toast";
import { z } from "zod";
import { followsSchema } from "./zod.utils";

const badRequestExceptionMessageSchema = z.object({
  response: z.object({ data: z.object({ message: z.string() }) }),
});

const errorSchema = z.object({ message: z.string() });

export const hasBadRequestExceptionMessage = (
  error: any,
): error is z.infer<typeof badRequestExceptionMessageSchema> => {
  return followsSchema(error, badRequestExceptionMessageSchema);
};

export const hasErrorMessage = (
  error: any,
): error is z.infer<typeof errorSchema> => {
  return followsSchema(error, errorSchema);
};

const mapError = (error: string): string => {
  error = error.replace("execution reverted: ", "");
  if (
    error.includes("User denied transaction") ||
    error.includes("user rejected transaction")
  )
    return "You rejected the transaction";
  if (error === "Ownable: caller is not the owner")
    return "You are not authorized to perform this action";
  if (error === "Only admin or manager")
    return "You must be an admin or a manager to perform this action";
  if (error === "Only admin")
    return "You must be an admin to perform this action";
  if (error === "Only manager")
    return "You must be a manager to perform this action";
  if (error === "Error generating transaction")
    return "A network error has occurred. Please try again";

  return error;
};

export const extractError = (error: unknown) => {
  if (!error) return "No error occurred";
  if (hasBadRequestExceptionMessage(error))
    return mapError(error.response.data.message);
  else if (hasErrorMessage(error)) return mapError(error.message);
  else if (typeof error === "string") return mapError(error);
  else {
    console.error("Unknown error: ", error);
    return "An unknown error occurred";
  }
};

export const handleError = (error: unknown) => toast.error(extractError(error));
