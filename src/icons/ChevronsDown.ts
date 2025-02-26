// VanJS Lucide - ChevronsDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChevronsDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 6 5 5 5-5" }),
    path({ "d": "m7 13 5 5 5-5" }),
  );
};
