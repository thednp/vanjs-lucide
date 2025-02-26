// VanJS Lucide - CornerRightUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CornerRightUp = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "10 9 15 4 20 9" }),
    path({ "d": "M4 20h7a4 4 0 0 0 4-4V4" }),
  );
};
