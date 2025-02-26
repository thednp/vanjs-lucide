// VanJS Lucide - ListFilter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListFilter = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 6h18" }),
    path({ "d": "M7 12h10" }),
    path({ "d": "M10 18h4" }),
  );
};
