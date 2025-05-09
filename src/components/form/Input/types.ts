import type { HTMLProps } from "react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";

type InputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  label: string;
  control?: Control<TFieldValues>;
  name: TName;
} & HTMLProps<HTMLInputElement>;

export type { InputProps };
