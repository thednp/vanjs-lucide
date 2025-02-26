// VanJS Lucide - CornerDownLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CornerDownLeft = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "9 10 4 15 9 20" }),
    path({ "d": "M20 4v7a4 4 0 0 1-4 4H4" }),
  );
};
