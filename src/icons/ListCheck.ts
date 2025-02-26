// VanJS Lucide - ListCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListCheck = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 18H3" }),
    path({ "d": "m15 18 2 2 4-4" }),
    path({ "d": "M16 12H3" }),
    path({ "d": "M16 6H3" }),
  );
};
