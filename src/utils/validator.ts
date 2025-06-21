import { AnyZodObject } from "zod";

export const zodValidator =
  (schema: AnyZodObject) =>
  (values: any): Record<string, string> => {
    const result = schema.safeParse(values);
    if (result.success) return {};
    const errors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      if (err.path[0]) {
        errors[err.path[0] as string] = err.message;
      }
    });
    return errors;
  };
