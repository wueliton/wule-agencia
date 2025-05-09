import type { InferType } from "yup";
import type { ContactFormSchema } from "./schema";

type ContactFormProps = InferType<typeof ContactFormSchema>;

export type { ContactFormProps };
