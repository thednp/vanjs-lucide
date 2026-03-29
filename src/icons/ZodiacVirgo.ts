// VanJS Lucide - ZodiacVirgo
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ZodiacVirgo = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" }),
    path({ "d": "M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" }),
    path({ "d": "M6 19V6a3 3 0 0 0-3-3h0" }),
    path({ "d": "M6 5.5a1 1 0 0 1 5 0V19" }),
  );
};
