// VanJS Lucide - IterationCw
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const IterationCw = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M4 10a8 8 0 1 1 8 8H4" }),
    path({ "d": "m8 22-4-4 4-4" }),
  );
};
