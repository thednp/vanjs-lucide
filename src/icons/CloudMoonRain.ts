// VanJS Lucide - CloudMoonRain
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CloudMoonRain = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }),
    path({ "d": "M11 20v2" }),
    path({ "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }),
    path({ "d": "M7 19v2" }),
  );
};
