// VanJS Lucide - Bird
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Bird = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 7h.01" }),
    path({ "d": "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }),
    path({ "d": "m20 7 2 .5-2 .5" }),
    path({ "d": "M10 18v3" }),
    path({ "d": "M14 17.75V21" }),
    path({ "d": "M7 18a6 6 0 0 0 3.84-10.61" }),
  );
};
