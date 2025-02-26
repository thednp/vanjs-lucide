// VanJS Lucide - Stethoscope
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Stethoscope = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 2v2" }),
    path({ "d": "M5 2v2" }),
    path({ "d": "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }),
    path({ "d": "M8 15a6 6 0 0 0 12 0v-3" }),
    circle({ cx: "20", cy: "10", "r": "2" }),
  );
};
