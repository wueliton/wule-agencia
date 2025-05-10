import type { HTMLProps } from "react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

interface TextareaProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends HTMLProps<HTMLTextAreaElement> {
  label: string;
  control?: Control<TFieldValues>;
  name: TName;
}

export type { TextareaProps };
