// VanJS Lucide - PilcrowRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PilcrowRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 3v11" }),
    path({ "d": "M10 9H7a1 1 0 0 1 0-6h8" }),
    path({ "d": "M14 3v11" }),
    path({ "d": "m18 14 4 4H2" }),
    path({ "d": "m22 18-4 4" }),
  );
};
