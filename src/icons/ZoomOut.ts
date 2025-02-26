// VanJS Lucide - ZoomOut
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ZoomOut = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "11", "r": "8" }),
    line({ x1: "21", x2: "16.65", y1: "21", y2: "16.65" }),
    line({ x1: "8", x2: "14", y1: "11", y2: "11" }),
  );
};
