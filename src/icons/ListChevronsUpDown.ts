// VanJS Lucide - ListChevronsUpDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListChevronsUpDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M3 5h8" }),
    path({ "d": "M3 12h8" }),
    path({ "d": "M3 19h8" }),
    path({ "d": "m15 8 3-3 3 3" }),
    path({ "d": "m15 16 3 3 3-3" }),
  );
};
