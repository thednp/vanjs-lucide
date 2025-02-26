// VanJS Lucide - ArrowLeftToLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowLeftToLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 19V5" }),
    path({ "d": "m13 6-6 6 6 6" }),
    path({ "d": "M7 12h14" }),
  );
};
