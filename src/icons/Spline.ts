// VanJS Lucide - Spline
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Spline = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "19", cy: "5", "r": "2" }),
    circle({ cx: "5", cy: "19", "r": "2" }),
    path({ "d": "M5 17A12 12 0 0 1 17 5" }),
  );
};
