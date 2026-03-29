// VanJS Lucide - ZodiacScorpio
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ZodiacScorpio = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" }),
    path({ "d": "m22 19-3 3" }),
    path({ "d": "M5 19V5.5a1 1 0 0 1 5 0" }),
    path({ "d": "M5 5.5A2.5 2.5 0 0 0 2.5 3" }),
  );
};
