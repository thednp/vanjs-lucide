// VanJS Lucide - ListCollapse
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListCollapse = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 5h11" }),
    path({ "d": "M10 12h11" }),
    path({ "d": "M10 19h11" }),
    path({ "d": "m3 10 3-3-3-3" }),
    path({ "d": "m3 20 3-3-3-3" }),
  );
};
