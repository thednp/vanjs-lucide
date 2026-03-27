// VanJS Lucide - ChartSpline
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChartSpline = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }),
  );
};
