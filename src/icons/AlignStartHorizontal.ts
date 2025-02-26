// VanJS Lucide - AlignStartHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignStartHorizontal = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "16", "x": "4", "y": "6", rx: "2" }),
    rect({ width: "6", height: "9", "x": "14", "y": "6", rx: "2" }),
    path({ "d": "M22 2H2" }),
  );
};
