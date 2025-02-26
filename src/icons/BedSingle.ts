// VanJS Lucide - BedSingle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BedSingle = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }),
    path({ "d": "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }),
    path({ "d": "M3 18h18" }),
  );
};
