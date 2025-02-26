// VanJS Lucide - ArrowLeftRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowLeftRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 3 4 7l4 4" }),
    path({ "d": "M4 7h16" }),
    path({ "d": "m16 21 4-4-4-4" }),
    path({ "d": "M20 17H4" }),
  );
};
