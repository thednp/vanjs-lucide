// VanJS Lucide - ScanLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ScanLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M7 12h10" }),
  );
};
