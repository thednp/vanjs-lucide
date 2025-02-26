// VanJS Lucide - Pi
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Pi = (props: Partial<SVGProps> = {}) => {
  const { line, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "9", x2: "9", y1: "4", y2: "20" }),
    path({ "d": "M4 7c0-1.7 1.3-3 3-3h13" }),
    path({ "d": "M18 20c-1.7 0-3-1.3-3-3V4" }),
  );
};
