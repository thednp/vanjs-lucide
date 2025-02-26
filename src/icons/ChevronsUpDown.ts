// VanJS Lucide - ChevronsUpDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChevronsUpDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 15 5 5 5-5" }),
    path({ "d": "m7 9 5-5 5 5" }),
  );
};
