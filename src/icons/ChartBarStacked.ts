// VanJS Lucide - ChartBarStacked
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartBarStacked = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 13v4" }),
    path({ "d": "M15 5v4" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    rect({ "x": "7", "y": "13", width: "9", height: "4", rx: "1" }),
    rect({ "x": "7", "y": "5", width: "12", height: "4", rx: "1" }),
  );
};
