// VanJS Lucide - RockingChair
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RockingChair = (props: Partial<SVGProps> = {}) => {
  const { polyline, line, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "3.5 2 6.5 12.5 18 12.5" }),
    line({ x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }),
    line({ x1: "15", x2: "18.5", y1: "12.5", y2: "20" }),
    path({ "d": "M2.75 18a13 13 0 0 0 18.5 0" }),
  );
};
