// VanJS Lucide - ListTree
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListTree = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M8 5h13" }),
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 19h8" }),
    path({ "d": "M3 10a2 2 0 0 0 2 2h3" }),
    path({ "d": "M3 5v12a2 2 0 0 0 2 2h3" }),
  );
};
