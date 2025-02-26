// VanJS Lucide - TrendingDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TrendingDown = (props: Partial<SVGProps> = {}) => {
  const { polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "22 17 13.5 8.5 8.5 13.5 2 7" }),
    polyline({ points: "16 17 22 17 22 11" }),
  );
};
