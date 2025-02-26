// VanJS Lucide - Underline
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Underline = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 4v6a6 6 0 0 0 12 0V4" }),
    line({ x1: "4", x2: "20", y1: "20", y2: "20" }),
  );
};
