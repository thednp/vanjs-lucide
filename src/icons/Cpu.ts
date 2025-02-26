// VanJS Lucide - Cpu
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Cpu = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "16", "x": "4", "y": "4", rx: "2" }),
    rect({ width: "6", height: "6", "x": "9", "y": "9", rx: "1" }),
    path({ "d": "M15 2v2" }),
    path({ "d": "M15 20v2" }),
    path({ "d": "M2 15h2" }),
    path({ "d": "M2 9h2" }),
    path({ "d": "M20 15h2" }),
    path({ "d": "M20 9h2" }),
    path({ "d": "M9 2v2" }),
    path({ "d": "M9 20v2" }),
  );
};
