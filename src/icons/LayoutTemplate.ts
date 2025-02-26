// VanJS Lucide - LayoutTemplate
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LayoutTemplate = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "7", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "9", height: "7", "x": "3", "y": "14", rx: "1" }),
    rect({ width: "5", height: "7", "x": "16", "y": "14", rx: "1" }),
  );
};
