// VanJS Lucide - ArrowDown10
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDown10 = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M17 10V4h-2" }),
    path({ "d": "M15 10h4" }),
    rect({ "x": "15", "y": "14", width: "4", height: "6", ry: "2" }),
  );
};
