// VanJS Lucide - BetweenVerticalStart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BetweenVerticalStart = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "13", "x": "3", "y": "8", rx: "1" }),
    path({ "d": "m15 2-3 3-3-3" }),
    rect({ width: "7", height: "13", "x": "14", "y": "8", rx: "1" }),
  );
};
