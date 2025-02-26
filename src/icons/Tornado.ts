// VanJS Lucide - Tornado
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tornado = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 4H3" }),
    path({ "d": "M18 8H6" }),
    path({ "d": "M19 12H9" }),
    path({ "d": "M16 16h-6" }),
    path({ "d": "M11 20H9" }),
  );
};
