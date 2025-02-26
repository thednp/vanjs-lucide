// VanJS Lucide - Monitor
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Monitor = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    line({ x1: "8", x2: "16", y1: "21", y2: "21" }),
    line({ x1: "12", x2: "12", y1: "17", y2: "21" }),
  );
};
