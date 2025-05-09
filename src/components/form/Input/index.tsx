import Typography from "@components/typography";
import type { InputProps } from "./types";
import { Controller, type FieldValues } from "react-hook-form";

function Input<TFieldValues extends FieldValues>({
  label,
  control,
  name,
  ...props
}: InputProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ fieldState: { error }, field }) => (
        <label className="flex flex-col gap-1">
          <Typography variant="body-alt">{label}</Typography>
          <input
            {...props}
            {...field}
            className="border border-gray-700 bg-gray-800 rounded p-2"
          />
          {error ? (
            <Typography variant="caption" className="text-right text-red-400">
              {error.message}
            </Typography>
          ) : null}
        </label>
      )}
    />
  );
}

export default Input;
