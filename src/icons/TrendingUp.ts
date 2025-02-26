// VanJS Lucide - TrendingUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TrendingUp = (props: Partial<SVGProps> = {}) => {
  const { polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    polyline({ points: "16 7 22 7 22 13" }),
  );
};
