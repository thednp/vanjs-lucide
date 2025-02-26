// VanJS Lucide - CornerDownRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CornerDownRight = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "15 10 20 15 15 20" }),
    path({ "d": "M4 4v7a4 4 0 0 0 4 4h12" }),
  );
};
