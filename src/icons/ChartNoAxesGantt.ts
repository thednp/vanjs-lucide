// VanJS Lucide - ChartNoAxesGantt
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartNoAxesGantt = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 6h10" }),
    path({ "d": "M6 12h9" }),
    path({ "d": "M11 18h7" }),
  );
};
