// VanJS Lucide - Currency
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Currency = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "8" }),
    line({ x1: "3", x2: "6", y1: "3", y2: "6" }),
    line({ x1: "21", x2: "18", y1: "3", y2: "6" }),
    line({ x1: "3", x2: "6", y1: "21", y2: "18" }),
    line({ x1: "21", x2: "18", y1: "21", y2: "18" }),
  );
};
