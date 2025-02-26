// VanJS Lucide - IterationCw
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const IterationCw = (props: Partial<SVGProps> = {}) => {
  const { path, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" }),
    polyline({ points: "8 22 4 18 8 14" }),
  );
};
