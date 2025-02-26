// VanJS Lucide - ChartColumnStacked
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartColumnStacked = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 13H7" }),
    path({ "d": "M19 9h-4" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    rect({ "x": "15", "y": "5", width: "4", height: "12", rx: "1" }),
    rect({ "x": "7", "y": "8", width: "4", height: "9", rx: "1" }),
  );
};
