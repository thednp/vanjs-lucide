// VanJS Lucide - IterationCcw
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const IterationCcw = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m16 14 4 4-4 4" }),
    path({ "d": "M20 10a8 8 0 1 0-8 8h8" }),
  );
};
