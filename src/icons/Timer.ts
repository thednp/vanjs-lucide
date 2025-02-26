// VanJS Lucide - Timer
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Timer = (props: Partial<SVGProps> = {}) => {
  const { line, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "10", x2: "14", y1: "2", y2: "2" }),
    line({ x1: "12", x2: "15", y1: "14", y2: "11" }),
    circle({ cx: "12", cy: "14", "r": "8" }),
  );
};
