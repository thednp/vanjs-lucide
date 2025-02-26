// VanJS Lucide - BetweenVerticalEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BetweenVerticalEnd = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "13", "x": "3", "y": "3", rx: "1" }),
    path({ "d": "m9 22 3-3 3 3" }),
    rect({ width: "7", height: "13", "x": "14", "y": "3", rx: "1" }),
  );
};
