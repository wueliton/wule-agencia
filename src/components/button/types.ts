import type { VariantProps } from "tailwind-variants";
import type { ButtonStyles } from "./styles";

type ButtonVariants = VariantProps<typeof ButtonStyles>;

interface IButtonProps extends ButtonVariants {}

export type { IButtonProps };
