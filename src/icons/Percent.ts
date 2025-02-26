// VanJS Lucide - Percent
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Percent = (props: Partial<SVGProps> = {}) => {
  const { line, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "19", x2: "5", y1: "5", y2: "19" }),
    circle({ cx: "6.5", cy: "6.5", "r": "2.5" }),
    circle({ cx: "17.5", cy: "17.5", "r": "2.5" }),
  );
};
