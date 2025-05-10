import type { Control, FieldPath, FieldValues } from "react-hook-form";

interface CheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  label: string;
  control?: Control<TFieldValues>;
  name: TName;
}

export type { CheckboxProps };
