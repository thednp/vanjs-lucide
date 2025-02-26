// VanJS Lucide - SquareSplitHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareSplitHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }),
    path({ "d": "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }),
    line({ x1: "12", x2: "12", y1: "4", y2: "20" }),
  );
};
