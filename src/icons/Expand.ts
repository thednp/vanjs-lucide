// VanJS Lucide - Expand
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Expand = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m15 15 6 6" }),
    path({ "d": "m15 9 6-6" }),
    path({ "d": "M21 16v5h-5" }),
    path({ "d": "M21 8V3h-5" }),
    path({ "d": "M3 16v5h5" }),
    path({ "d": "m3 21 6-6" }),
    path({ "d": "M3 8V3h5" }),
    path({ "d": "M9 9 3 3" }),
  );
};
