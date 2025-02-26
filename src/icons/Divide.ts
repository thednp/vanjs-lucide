// VanJS Lucide - Divide
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Divide = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "6", "r": "1" }),
    line({ x1: "5", x2: "19", y1: "12", y2: "12" }),
    circle({ cx: "12", cy: "18", "r": "1" }),
  );
};
