// VanJS Lucide - ListTree
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListTree = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12h-8" }),
    path({ "d": "M21 6H8" }),
    path({ "d": "M21 18h-8" }),
    path({ "d": "M3 6v4c0 1.1.9 2 2 2h3" }),
    path({ "d": "M3 10v6c0 1.1.9 2 2 2h3" }),
  );
};
