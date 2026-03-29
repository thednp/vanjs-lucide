// VanJS Lucide - Minimize2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Minimize2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m14 10 7-7" }),
    path({ "d": "M20 10h-6V4" }),
    path({ "d": "m3 21 7-7" }),
    path({ "d": "M4 14h6v6" }),
  );
};
