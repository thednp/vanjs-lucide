// VanJS Lucide - ToggleLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ToggleLeft = (props: Partial<SVGProps> = {}) => {
  const { rect, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "6", ry: "6" }),
    circle({ cx: "8", cy: "12", "r": "2" }),
  );
};
