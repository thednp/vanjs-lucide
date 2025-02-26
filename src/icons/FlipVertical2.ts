// VanJS Lucide - FlipVertical2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FlipVertical2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 3-5 5-5-5h10" }),
    path({ "d": "m17 21-5-5-5 5h10" }),
    path({ "d": "M4 12H2" }),
    path({ "d": "M10 12H8" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" }),
  );
};
