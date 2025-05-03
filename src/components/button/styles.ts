import { tv } from "tailwind-variants";

const ButtonStyles = tv({
  base: "px-10 py-3 rounded-full cursor-pointer transition-colors uppercase",
  variants: {
    size: {
      md: "",
    },
    color: {
      primary: "bg-pink-500 text-white hover:bg-pink-700",
      white: "bg-white text-pink-500 hover:bg-gray-100",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export { ButtonStyles };
