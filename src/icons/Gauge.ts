// VanJS Lucide - Gauge
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Gauge = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12 14 4-4" }),
    path({ "d": "M3.34 19a10 10 0 1 1 17.32 0" }),
  );
};
