import { useEffect, useRef } from "react";
import Mask from "./Mask";
import type { MaskOptions } from "./types";

function useMask() {
  const applyMask = (value: string, mask?: MaskOptions) => {
    if (!mask) return value;
    return Mask[mask](value);
  };

  return {
    applyMask,
  };
}

export default useMask;
