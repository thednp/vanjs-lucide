// VanJS Lucide - UserCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UserCheck = (props: Partial<SVGProps> = {}) => {
  const { path, circle, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    circle({ cx: "9", cy: "7", "r": "4" }),
    polyline({ points: "16 11 18 13 22 9" }),
  );
};
