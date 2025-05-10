import Typography from "@components/typography";
import type { InputProps } from "./types";
import { Controller, type FieldValues } from "react-hook-form";
import useMask from "../utils/mask";

function Input<TFieldValues extends FieldValues>({
  label,
  control,
  name,
  mask,
  ...props
}: InputProps<TFieldValues>) {
  const { applyMask } = useMask();

  const handleChange =
    (onChange: (...event: any[]) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(applyMask(e.target.value, mask));
    };

  return (
    <Controller
      control={control}
      name={name}
      render={({ fieldState: { error }, field }) => {
        return (
          <label className="flex flex-col gap-1">
            <Typography variant="body-alt">{label}</Typography>
            <input
              {...props}
              {...field}
              onChange={handleChange(field.onChange)}
              value={applyMask(field.value ?? "")}
              className="border border-gray-700 bg-gray-800 rounded p-2"
            />
            {error ? (
              <Typography variant="caption" className="text-right text-red-400">
                {error.message}
              </Typography>
            ) : null}
          </label>
        );
      }}
    />
  );
}

export default Input;
