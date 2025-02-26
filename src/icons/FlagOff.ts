// VanJS Lucide - FlagOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FlagOff = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2c3 0 5 2 8 2s4-1 4-1v11" }),
    path({ "d": "M4 22V4" }),
    path({ "d": "M4 15s1-1 4-1 5 2 8 2" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
  );
};
