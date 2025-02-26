// VanJS Lucide - Repeat
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Repeat = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 2 4 4-4 4" }),
    path({ "d": "M3 11v-1a4 4 0 0 1 4-4h14" }),
    path({ "d": "m7 22-4-4 4-4" }),
    path({ "d": "M21 13v1a4 4 0 0 1-4 4H3" }),
  );
};
