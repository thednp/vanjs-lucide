// VanJS Lucide - TrendingUpDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TrendingUpDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14.828 14.828 21 21" }),
    path({ "d": "M21 16v5h-5" }),
    path({ "d": "m21 3-9 9-4-4-6 6" }),
    path({ "d": "M21 8V3h-5" }),
  );
};
