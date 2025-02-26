// VanJS Lucide - AlignEndVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignEndVertical = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "6", "x": "2", "y": "4", rx: "2" }),
    rect({ width: "9", height: "6", "x": "9", "y": "14", rx: "2" }),
    path({ "d": "M22 22V2" }),
  );
};
