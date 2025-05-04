import type { VariantProps } from "tailwind-variants";
import type { ButtonStyles } from "./styles";

type ButtonVariants = VariantProps<typeof ButtonStyles>;

interface IButtonProps extends ButtonVariants {
  "aria-label": string;
}

export type { IButtonProps };
