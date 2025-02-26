// VanJS Lucide - ChartNoAxesColumn
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartNoAxesColumn = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "18", x2: "18", y1: "20", y2: "10" }),
    line({ x1: "12", x2: "12", y1: "20", y2: "4" }),
    line({ x1: "6", x2: "6", y1: "20", y2: "14" }),
  );
};
