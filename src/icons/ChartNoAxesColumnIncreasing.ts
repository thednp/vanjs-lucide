// VanJS Lucide - ChartNoAxesColumnIncreasing
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChartNoAxesColumnIncreasing = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M5 21v-6" }),
    path({ "d": "M12 21V9" }),
    path({ "d": "M19 21V3" }),
  );
};
