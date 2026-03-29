// VanJS Lucide - ZodiacPisces
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ZodiacPisces = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M19 21a15 15 0 0 1 0-18" }),
    path({ "d": "M20 12H4" }),
    path({ "d": "M5 3a15 15 0 0 1 0 18" }),
  );
};
