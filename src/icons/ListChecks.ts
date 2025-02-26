// VanJS Lucide - ListChecks
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListChecks = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 17 2 2 4-4" }),
    path({ "d": "m3 7 2 2 4-4" }),
    path({ "d": "M13 6h8" }),
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 18h8" }),
  );
};
