// VanJS Lucide - SquareDivide
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareDivide = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    line({ x1: "8", x2: "16", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "16", y2: "16" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "8" }),
  );
};
