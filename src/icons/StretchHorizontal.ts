// VanJS Lucide - StretchHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const StretchHorizontal = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "6", "x": "2", "y": "4", rx: "2" }),
    rect({ width: "20", height: "6", "x": "2", "y": "14", rx: "2" }),
  );
};
