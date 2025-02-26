// VanJS Lucide - ReceiptSwissFranc
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ReceiptSwissFranc = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
    }),
    path({ "d": "M10 17V7h5" }),
    path({ "d": "M10 11h4" }),
    path({ "d": "M8 15h5" }),
  );
};
