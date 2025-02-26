// VanJS Lucide - ShoppingBag
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ShoppingBag = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    path({ "d": "M3 6h18" }),
    path({ "d": "M16 10a4 4 0 0 1-8 0" }),
  );
};
