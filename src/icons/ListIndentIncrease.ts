// VanJS Lucide - ListIndentIncrease
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListIndentIncrease = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M21 5H11" }),
    path({ "d": "M21 12H11" }),
    path({ "d": "M21 19H11" }),
    path({ "d": "m3 8 4 4-4 4" }),
  );
};
