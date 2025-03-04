// VanJS Lucide - CornerLeftDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CornerLeftDown = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "14 15 9 20 4 15" }),
    path({ "d": "M20 4h-7a4 4 0 0 0-4 4v12" }),
  );
};
