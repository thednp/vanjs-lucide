// VanJS Lucide - SquareUserRound
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareUserRound = (props: Partial<SVGProps> = {}) => {
  const { path, circle, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 21a6 6 0 0 0-12 0" }),
    circle({ cx: "12", cy: "11", "r": "4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
  );
};
