// VanJS Lucide - Codepen
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Codepen = (props: Partial<SVGProps> = {}) => {
  const { polygon, line, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "15.5" }),
    polyline({ points: "22 8.5 12 15.5 2 8.5" }),
    polyline({ points: "2 15.5 12 8.5 22 15.5" }),
    line({ x1: "12", x2: "12", y1: "2", y2: "8.5" }),
  );
};
