// VanJS Lucide - BetweenHorizontalStart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BetweenHorizontalStart = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "13", height: "7", "x": "8", "y": "3", rx: "1" }),
    path({ "d": "m2 9 3 3-3 3" }),
    rect({ width: "13", height: "7", "x": "8", "y": "14", rx: "1" }),
  );
};
