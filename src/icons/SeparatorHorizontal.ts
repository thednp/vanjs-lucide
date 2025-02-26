// VanJS Lucide - SeparatorHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SeparatorHorizontal = (props: Partial<SVGProps> = {}) => {
  const { line, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "3", x2: "21", y1: "12", y2: "12" }),
    polyline({ points: "8 8 12 4 16 8" }),
    polyline({ points: "16 16 12 20 8 16" }),
  );
};
