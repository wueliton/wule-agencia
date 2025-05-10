import type { VariantProps } from "tailwind-variants";
import type { ButtonStyles } from "./styles";
import type { HTMLTag, Polymorphic } from "astro/types";
import type { ElementType } from "react";
import type { PolymorphicProps } from "src/types/types";

type ButtonVariants = VariantProps<typeof ButtonStyles>;

type IButtonProps<E extends ElementType> = PolymorphicProps<E> &
  ButtonVariants & {
    "aria-label": string;
  };

export type { IButtonProps };
