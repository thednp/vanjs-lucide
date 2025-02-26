// VanJS Lucide - ScanSearch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ScanSearch = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "m16 16-1.9-1.9" }),
  );
};
