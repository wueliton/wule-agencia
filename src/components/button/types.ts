import type { VariantProps } from "tailwind-variants";
import type { ButtonStyles } from "./styles";
import type { HTMLTag, Polymorphic } from "astro/types";

type ButtonVariants = VariantProps<typeof ButtonStyles>;

type IButtonProps<Tag extends HTMLTag> = Polymorphic<{ as: Tag }> &
  ButtonVariants & {
    "aria-label": string;
  };

export type { IButtonProps };
