// VanJS Lucide - ChevronsRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChevronsRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m6 17 5-5-5-5" }),
    path({ "d": "m13 17 5-5-5-5" }),
  );
};
