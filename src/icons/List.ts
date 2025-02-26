// VanJS Lucide - List
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const List = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 12h.01" }),
    path({ "d": "M3 18h.01" }),
    path({ "d": "M3 6h.01" }),
    path({ "d": "M8 12h13" }),
    path({ "d": "M8 18h13" }),
    path({ "d": "M8 6h13" }),
  );
};
