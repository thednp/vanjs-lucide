// VanJS Lucide - Sheet
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Sheet = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    line({ x1: "3", x2: "21", y1: "9", y2: "9" }),
    line({ x1: "3", x2: "21", y1: "15", y2: "15" }),
    line({ x1: "9", x2: "9", y1: "9", y2: "21" }),
    line({ x1: "15", x2: "15", y1: "9", y2: "21" }),
  );
};
