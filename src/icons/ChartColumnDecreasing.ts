// VanJS Lucide - ChartColumnDecreasing
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartColumnDecreasing = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 17V9" }),
    path({ "d": "M18 17v-3" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M8 17V5" }),
  );
};
