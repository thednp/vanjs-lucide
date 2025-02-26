// VanJS Lucide - ArrowDownUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDownUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "m21 8-4-4-4 4" }),
    path({ "d": "M17 4v16" }),
  );
};
