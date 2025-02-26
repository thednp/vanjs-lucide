// VanJS Lucide - Clock2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Clock2 = (props: Partial<SVGProps> = {}) => {
  const { circle, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 16 10" }),
  );
};
