// VanJS Lucide - ChartNoAxesColumnDecreasing
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChartNoAxesColumnDecreasing = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20V10" }),
    path({ "d": "M18 20v-4" }),
    path({ "d": "M6 20V4" }),
  );
};
