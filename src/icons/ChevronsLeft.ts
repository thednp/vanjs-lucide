// VanJS Lucide - ChevronsLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChevronsLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m11 17-5-5 5-5" }),
    path({ "d": "m18 17-5-5 5-5" }),
  );
};
