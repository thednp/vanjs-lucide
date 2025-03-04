// VanJS Lucide - FlashlightOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FlashlightOff = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }),
    path({ "d": "M7 2h11v4c0 2-2 2-2 4v1" }),
    line({ x1: "11", x2: "18", y1: "6", y2: "6" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
  );
};
