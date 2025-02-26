// VanJS Lucide - Baseline
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Baseline = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 20h16" }),
    path({ "d": "m6 16 6-12 6 12" }),
    path({ "d": "M8 12h8" }),
  );
};
