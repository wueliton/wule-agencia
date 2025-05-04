import { tv } from "tailwind-variants";

const ButtonStyles = tv({
  base: "px-10 py-3 rounded-full cursor-pointer transition-colors uppercase",
  variants: {
    size: {
      md: "",
    },
    color: {
      primary: "bg-[#fd1468] text-white hover:bg-pink-700",
      white: "bg-white text-[#fd1468] hover:bg-gray-100",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export { ButtonStyles };
