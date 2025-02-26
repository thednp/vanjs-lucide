// VanJS Lucide - Forward
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Forward = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "15 17 20 12 15 7" }),
    path({ "d": "M4 18v-2a4 4 0 0 1 4-4h12" }),
  );
};
