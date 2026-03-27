// VanJS Lucide - ArrowDownWideNarrow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowDownWideNarrow = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M11 4h10" }),
    path({ "d": "M11 8h7" }),
    path({ "d": "M11 12h4" }),
  );
};
