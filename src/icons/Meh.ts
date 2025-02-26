// VanJS Lucide - Meh
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Meh = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "8", x2: "16", y1: "15", y2: "15" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" }),
  );
};
