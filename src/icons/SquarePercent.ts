// VanJS Lucide - SquarePercent
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquarePercent = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "M9 9h.01" }),
    path({ "d": "M15 15h.01" }),
  );
};
