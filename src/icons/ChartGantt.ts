// VanJS Lucide - ChartGantt
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartGantt = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 6h8" }),
    path({ "d": "M12 16h6" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M8 11h7" }),
  );
};
