// VanJS Lucide - Type
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Type = (props: Partial<SVGProps> = {}) => {
  const { polyline, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "4 7 4 4 20 4 20 7" }),
    line({ x1: "9", x2: "15", y1: "20", y2: "20" }),
    line({ x1: "12", x2: "12", y1: "4", y2: "20" }),
  );
};
