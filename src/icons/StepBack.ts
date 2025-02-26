// VanJS Lucide - StepBack
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const StepBack = (props: Partial<SVGProps> = {}) => {
  const { line, polygon } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "18", x2: "18", y1: "20", y2: "4" }),
    polygon({ points: "14,20 4,12 14,4" }),
  );
};
