// VanJS Lucide - BedDouble
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BedDouble = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }),
    path({ "d": "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }),
    path({ "d": "M12 4v6" }),
    path({ "d": "M2 18h20" }),
  );
};
