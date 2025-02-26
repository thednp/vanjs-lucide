// VanJS Lucide - FilterX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FilterX = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" }),
    path({ "d": "m22 3-5 5" }),
    path({ "d": "m17 3 5 5" }),
  );
};
