// VanJS Lucide - SlidersVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SlidersVertical = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "4", x2: "4", y1: "21", y2: "14" }),
    line({ x1: "4", x2: "4", y1: "10", y2: "3" }),
    line({ x1: "12", x2: "12", y1: "21", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "3" }),
    line({ x1: "20", x2: "20", y1: "21", y2: "16" }),
    line({ x1: "20", x2: "20", y1: "12", y2: "3" }),
    line({ x1: "2", x2: "6", y1: "14", y2: "14" }),
    line({ x1: "10", x2: "14", y1: "8", y2: "8" }),
    line({ x1: "18", x2: "22", y1: "16", y2: "16" }),
  );
};
