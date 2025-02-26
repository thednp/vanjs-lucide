// VanJS Lucide - CircleAlert
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleAlert = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "12" }),
    line({ x1: "12", x2: "12.01", y1: "16", y2: "16" }),
  );
};
