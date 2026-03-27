// VanJS Lucide - ArrowUpDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowUpDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m21 16-4 4-4-4" }),
    path({ "d": "M17 20V4" }),
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
  );
};
