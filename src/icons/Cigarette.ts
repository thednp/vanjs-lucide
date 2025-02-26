// VanJS Lucide - Cigarette
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Cigarette = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }),
    path({ "d": "M18 8c0-2.5-2-2.5-2-5" }),
    path({ "d": "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }),
    path({ "d": "M22 8c0-2.5-2-2.5-2-5" }),
    path({ "d": "M7 12v4" }),
  );
};
