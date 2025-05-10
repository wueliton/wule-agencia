import type { IButtonProps } from "./types";
import { ButtonStyles } from "./styles";
import type { ElementType } from "react";

function Button<E extends ElementType>({
  as,
  size,
  color,
  ...props
}: IButtonProps<E>) {
  const Tag = as ?? "button";

  return <Tag {...props} className={ButtonStyles({ size, color })} />;
}

export default Button;
