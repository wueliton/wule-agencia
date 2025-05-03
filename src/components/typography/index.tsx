import cn from "../../utils/cn";
import { TypographyOptions } from "./constants";
import type { TypographyProps } from "./types";

function Typography({ variant = "body", ...props }: TypographyProps) {
  const { tag, className } = TypographyOptions[variant];
  const Element = tag as React.ElementType;

  return <Element {...props} className={cn(className, props.className)} />;
}

export default Typography;
