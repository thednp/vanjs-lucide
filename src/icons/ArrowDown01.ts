// VanJS Lucide - ArrowDown01
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDown01 = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    rect({ "x": "15", "y": "4", width: "4", height: "6", ry: "2" }),
    path({ "d": "M17 20v-6h-2" }),
    path({ "d": "M15 20h4" }),
  );
};
