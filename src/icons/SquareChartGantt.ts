// VanJS Lucide - SquareChartGantt
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareChartGantt = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 8h7" }),
    path({ "d": "M8 12h6" }),
    path({ "d": "M11 16h5" }),
  );
};
