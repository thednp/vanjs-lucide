// VanJS Lucide - ChartBar
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartBar = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M7 16h8" }),
    path({ "d": "M7 11h12" }),
    path({ "d": "M7 6h3" }),
  );
};
