// VanJS Lucide - ListFilterPlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListFilterPlus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 18h4" }),
    path({ "d": "M11 6H3" }),
    path({ "d": "M15 6h6" }),
    path({ "d": "M18 9V3" }),
    path({ "d": "M7 12h8" }),
  );
};
