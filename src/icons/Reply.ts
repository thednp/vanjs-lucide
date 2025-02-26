// VanJS Lucide - Reply
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Reply = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "9 17 4 12 9 7" }),
    path({ "d": "M20 18v-2a4 4 0 0 0-4-4H4" }),
  );
};
