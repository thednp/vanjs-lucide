// VanJS Lucide - ChevronsLeftRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChevronsLeftRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 7-5 5 5 5" }),
    path({ "d": "m15 7 5 5-5 5" }),
  );
};
