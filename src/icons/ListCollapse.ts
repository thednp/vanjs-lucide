// VanJS Lucide - ListCollapse
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListCollapse = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 10 2.5-2.5L3 5" }),
    path({ "d": "m3 19 2.5-2.5L3 14" }),
    path({ "d": "M10 6h11" }),
    path({ "d": "M10 12h11" }),
    path({ "d": "M10 18h11" }),
  );
};
