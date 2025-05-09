import Typography from "@components/typography";
import type { TextareaProps } from "./types";

function Textarea({ label, ...props }: TextareaProps) {
  return (
    <label className="flex flex-col gap-1">
      <Typography variant="body-alt">{label}</Typography>
      <textarea
        {...props}
        className="border border-gray-700 bg-gray-800 rounded p-2"
      />
    </label>
  );
}

export default Textarea;
