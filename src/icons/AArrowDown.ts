// VanJS Lucide - AArrowDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AArrowDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3.5 13h6" }),
    path({ "d": "m2 16 4.5-9 4.5 9" }),
    path({ "d": "M18 7v9" }),
    path({ "d": "m14 12 4 4 4-4" }),
  );
};
