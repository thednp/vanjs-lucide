// VanJS Lucide - SkipBack
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SkipBack = (props: Partial<SVGProps> = {}) => {
  const { polygon, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "19 20 9 12 19 4 19 20" }),
    line({ x1: "5", x2: "5", y1: "19", y2: "5" }),
  );
};
