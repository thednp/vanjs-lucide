// VanJS Lucide - StepForward
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const StepForward = (props: Partial<SVGProps> = {}) => {
  const { line, polygon } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "6", x2: "6", y1: "4", y2: "20" }),
    polygon({ points: "10,4 20,12 10,20" }),
  );
};
