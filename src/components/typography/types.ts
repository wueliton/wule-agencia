import type { TypographyOptions } from "./constants";

type TypographyProps = {
  variant?: keyof typeof TypographyOptions;
} & React.HTMLAttributes<HTMLDivElement>;

export type { TypographyProps };
