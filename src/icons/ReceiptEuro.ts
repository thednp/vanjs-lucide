// VanJS Lucide - ReceiptEuro
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ReceiptEuro = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
    }),
    path({ "d": "M8 12h5" }),
    path({ "d": "M16 9.5a4 4 0 1 0 0 5.2" }),
  );
};
