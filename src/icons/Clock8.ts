// VanJS Lucide - Clock8
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Clock8 = (props: Partial<SVGProps> = {}) => {
  const { circle, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 8 14" }),
  );
};
