// VanJS Lucide - ChartCandlestick
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartCandlestick = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 5v4" }),
    rect({ width: "4", height: "6", "x": "7", "y": "9", rx: "1" }),
    path({ "d": "M9 15v2" }),
    path({ "d": "M17 3v2" }),
    rect({ width: "4", height: "8", "x": "15", "y": "5", rx: "1" }),
    path({ "d": "M17 13v3" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
  );
};
