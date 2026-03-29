// VanJS Lucide - ArrowDownNarrowWide
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowDownNarrowWide = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M11 4h4" }),
    path({ "d": "M11 8h7" }),
    path({ "d": "M11 12h10" }),
  );
};
