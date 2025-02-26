// VanJS Lucide - Minimize2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Minimize2 = (props: Partial<SVGProps> = {}) => {
  const { polyline, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "4 14 10 14 10 20" }),
    polyline({ points: "20 10 14 10 14 4" }),
    line({ x1: "14", x2: "21", y1: "10", y2: "3" }),
    line({ x1: "3", x2: "10", y1: "21", y2: "14" }),
  );
};
