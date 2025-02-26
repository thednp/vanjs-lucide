// VanJS Lucide - CircleDivide
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleDivide = (props: Partial<SVGProps> = {}) => {
  const { line, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "8", x2: "16", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "16", y2: "16" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "8" }),
    circle({ cx: "12", cy: "12", "r": "10" }),
  );
};
