// VanJS Lucide - RectangleVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RectangleVertical = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "12", height: "20", "x": "6", "y": "2", rx: "2" }),
  );
};
