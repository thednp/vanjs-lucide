// VanJS Lucide - PillBottle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PillBottle = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }),
    path({ "d": "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }),
    rect({ width: "16", height: "5", "x": "4", "y": "2", rx: "1" }),
  );
};
