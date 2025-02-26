// VanJS Lucide - Maximize
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Maximize = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 3H5a2 2 0 0 0-2 2v3" }),
    path({ "d": "M21 8V5a2 2 0 0 0-2-2h-3" }),
    path({ "d": "M3 16v3a2 2 0 0 0 2 2h3" }),
    path({ "d": "M16 21h3a2 2 0 0 0 2-2v-3" }),
  );
};
