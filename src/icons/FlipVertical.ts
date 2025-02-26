// VanJS Lucide - FlipVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FlipVertical = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }),
    path({ "d": "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }),
    path({ "d": "M4 12H2" }),
    path({ "d": "M10 12H8" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" }),
  );
};
