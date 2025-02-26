// VanJS Lucide - ALargeSmall
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ALargeSmall = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 14h-5" }),
    path({ "d": "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" }),
    path({ "d": "M4.5 13h6" }),
    path({ "d": "m3 16 4.5-9 4.5 9" }),
  );
};
