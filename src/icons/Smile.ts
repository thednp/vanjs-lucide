// VanJS Lucide - Smile
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Smile = (props: Partial<SVGProps> = {}) => {
  const { circle, path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" }),
  );
};
