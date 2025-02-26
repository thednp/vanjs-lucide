// VanJS Lucide - SquareScissors
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareScissors = (props: Partial<SVGProps> = {}) => {
  const { rect, circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "20", "x": "2", "y": "2", rx: "2" }),
    circle({ cx: "8", cy: "8", "r": "2" }),
    path({ "d": "M9.414 9.414 12 12" }),
    path({ "d": "M14.8 14.8 18 18" }),
    circle({ cx: "8", cy: "16", "r": "2" }),
    path({ "d": "m18 6-8.586 8.586" }),
  );
};
