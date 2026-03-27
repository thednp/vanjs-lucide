// VanJS Lucide - ArrowRightToLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowRightToLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 12H3" }),
    path({ "d": "m11 18 6-6-6-6" }),
    path({ "d": "M21 5v14" }),
  );
};
