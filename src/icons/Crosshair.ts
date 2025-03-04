// VanJS Lucide - Crosshair
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Crosshair = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "22", x2: "18", y1: "12", y2: "12" }),
    line({ x1: "6", x2: "2", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "6", y2: "2" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "18" }),
  );
};
