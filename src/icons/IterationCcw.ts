// VanJS Lucide - IterationCcw
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const IterationCcw = (props: Partial<SVGProps> = {}) => {
  const { path, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" }),
    polyline({ points: "16 14 20 18 16 22" }),
  );
};
