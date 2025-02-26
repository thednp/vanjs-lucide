// VanJS Lucide - ArrowRightLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowRightLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 3 4 4-4 4" }),
    path({ "d": "M20 7H4" }),
    path({ "d": "m8 21-4-4 4-4" }),
    path({ "d": "M4 17h16" }),
  );
};
