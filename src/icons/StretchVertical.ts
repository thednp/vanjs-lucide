// VanJS Lucide - StretchVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const StretchVertical = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "20", "x": "4", "y": "2", rx: "2" }),
    rect({ width: "6", height: "20", "x": "14", "y": "2", rx: "2" }),
  );
};
