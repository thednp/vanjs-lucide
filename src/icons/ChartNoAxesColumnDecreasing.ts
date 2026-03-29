// VanJS Lucide - ChartNoAxesColumnDecreasing
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChartNoAxesColumnDecreasing = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M5 21V3" }),
    path({ "d": "M12 21V9" }),
    path({ "d": "M19 21v-6" }),
  );
};
