// VanJS Lucide - SquareSlash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareSlash = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    line({ x1: "9", x2: "15", y1: "15", y2: "9" }),
  );
};
