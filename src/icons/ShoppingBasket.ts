// VanJS Lucide - ShoppingBasket
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ShoppingBasket = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 11-1 9" }),
    path({ "d": "m19 11-4-7" }),
    path({ "d": "M2 11h20" }),
    path({
      "d": "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
    }),
    path({ "d": "M4.5 15.5h15" }),
    path({ "d": "m5 11 4-7" }),
    path({ "d": "m9 11 1 9" }),
  );
};
