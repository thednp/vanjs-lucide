// VanJS Lucide - Tablet
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tablet = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2", ry: "2" }),
    line({ x1: "12", x2: "12.01", y1: "18", y2: "18" }),
  );
};
