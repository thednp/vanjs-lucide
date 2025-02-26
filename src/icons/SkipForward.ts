// VanJS Lucide - SkipForward
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SkipForward = (props: Partial<SVGProps> = {}) => {
  const { polygon, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "5 4 15 12 5 20 5 4" }),
    line({ x1: "19", x2: "19", y1: "5", y2: "19" }),
  );
};
