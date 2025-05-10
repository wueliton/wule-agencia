import type { HTMLProps } from "react";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import type { MaskOptions } from "../utils/mask/types";

type InputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  label: string;
  control?: Control<TFieldValues>;
  name: TName;
  mask?: MaskOptions;
} & HTMLProps<HTMLInputElement>;

export type { InputProps };
