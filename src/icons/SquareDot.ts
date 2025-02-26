// VanJS Lucide - SquareDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareDot = (props: Partial<SVGProps> = {}) => {
  const { rect, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    circle({ cx: "12", cy: "12", "r": "1" }),
  );
};
