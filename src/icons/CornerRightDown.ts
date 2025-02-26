// VanJS Lucide - CornerRightDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CornerRightDown = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "10 15 15 20 20 15" }),
    path({ "d": "M4 4h7a4 4 0 0 1 4 4v12" }),
  );
};
