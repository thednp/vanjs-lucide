// VanJS Lucide - BatteryLow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BatteryLow = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "10", "x": "2", "y": "7", rx: "2", ry: "2" }),
    line({ x1: "22", x2: "22", y1: "11", y2: "13" }),
    line({ x1: "6", x2: "6", y1: "11", y2: "13" }),
  );
};
