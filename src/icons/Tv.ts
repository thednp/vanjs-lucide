// VanJS Lucide - Tv
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tv = (props: Partial<SVGProps> = {}) => {
  const { rect, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "15", "x": "2", "y": "7", rx: "2", ry: "2" }),
    polyline({ points: "17 2 12 7 7 2" }),
  );
};
