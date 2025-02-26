// VanJS Lucide - Album
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Album = (props: Partial<SVGProps> = {}) => {
  const { rect, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    polyline({ points: "11 3 11 11 14 8 17 11 17 3" }),
  );
};
