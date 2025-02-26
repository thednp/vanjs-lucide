// VanJS Lucide - ArrowUpNarrowWide
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowUpNarrowWide = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M11 12h4" }),
    path({ "d": "M11 16h7" }),
    path({ "d": "M11 20h10" }),
  );
};
