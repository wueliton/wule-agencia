import Typography from "@components/typography";
import type { CheckboxProps } from "./types";
import { Controller, type FieldValues } from "react-hook-form";
import { useId } from "react";

function Checkbox<TFieldVBalues extends FieldValues>({
  label,
  control,
  name,
}: CheckboxProps<TFieldVBalues>) {
  const id = useId();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          <div className="flex items-center gap-2">
            <input
              {...field}
              id={id}
              type="checkbox"
              className="appearance-none w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={id} className="text-sm font-medium text-gray-300">
              <Typography>{label}</Typography>
            </label>
          </div>
          {error ? (
            <Typography variant="caption" className="text-red-400 ml-6">
              {error.message}
            </Typography>
          ) : null}
        </div>
      )}
    />
  );
}

export default Checkbox;
