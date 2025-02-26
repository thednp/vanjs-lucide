// VanJS Lucide - ArrowDownZA
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDownZA = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M15 4h5l-5 6h5" }),
    path({ "d": "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }),
    path({ "d": "M20 18h-5" }),
  );
};
