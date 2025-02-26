// VanJS Lucide - HardHat
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const HardHat = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }),
    path({ "d": "M14 6a6 6 0 0 1 6 6v3" }),
    path({ "d": "M4 15v-3a6 6 0 0 1 6-6" }),
    rect({ "x": "2", "y": "15", width: "20", height: "4", rx: "1" }),
  );
};
