// VanJS Lucide - AlignEndHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignEndHorizontal = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "16", "x": "4", "y": "2", rx: "2" }),
    rect({ width: "6", height: "9", "x": "14", "y": "9", rx: "2" }),
    path({ "d": "M22 22H2" }),
  );
};
