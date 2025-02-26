// VanJS Lucide - ReceiptPoundSterling
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ReceiptPoundSterling = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
    }),
    path({ "d": "M8 13h5" }),
    path({ "d": "M10 17V9.5a2.5 2.5 0 0 1 5 0" }),
    path({ "d": "M8 17h7" }),
  );
};
