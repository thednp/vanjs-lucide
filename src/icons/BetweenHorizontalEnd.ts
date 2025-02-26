// VanJS Lucide - BetweenHorizontalEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BetweenHorizontalEnd = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "13", height: "7", "x": "3", "y": "3", rx: "1" }),
    path({ "d": "m22 15-3-3 3-3" }),
    rect({ width: "13", height: "7", "x": "3", "y": "14", rx: "1" }),
  );
};
