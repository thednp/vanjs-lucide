// VanJS Lucide - SeparatorVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SeparatorVertical = (props: Partial<SVGProps> = {}) => {
  const { line, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "12", y1: "3", y2: "21" }),
    polyline({ points: "8 8 4 12 8 16" }),
    polyline({ points: "16 16 20 12 16 8" }),
  );
};
