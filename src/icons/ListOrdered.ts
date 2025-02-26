// VanJS Lucide - ListOrdered
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListOrdered = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 12h11" }),
    path({ "d": "M10 18h11" }),
    path({ "d": "M10 6h11" }),
    path({ "d": "M4 10h2" }),
    path({ "d": "M4 6h1v4" }),
    path({ "d": "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }),
  );
};
