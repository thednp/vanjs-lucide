// VanJS Lucide - ArrowDownAZ
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDownAZ = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M20 8h-5" }),
    path({ "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }),
    path({ "d": "M15 14h5l-5 6h5" }),
  );
};
