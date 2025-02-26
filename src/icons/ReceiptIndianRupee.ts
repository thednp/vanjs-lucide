// VanJS Lucide - ReceiptIndianRupee
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ReceiptIndianRupee = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
    }),
    path({ "d": "M8 7h8" }),
    path({ "d": "M12 17.5 8 15h1a4 4 0 0 0 0-8" }),
    path({ "d": "M8 11h8" }),
  );
};
