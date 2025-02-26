// VanJS Lucide - Terminal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Terminal = (props: Partial<SVGProps> = {}) => {
  const { polyline, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "4 17 10 11 4 5" }),
    line({ x1: "12", x2: "20", y1: "19", y2: "19" }),
  );
};
