// VanJS Lucide - SlidersVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SlidersVertical = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 8h4" }),
    path({ "d": "M12 21v-9" }),
    path({ "d": "M12 8V3" }),
    path({ "d": "M17 16h4" }),
    path({ "d": "M19 12V3" }),
    path({ "d": "M19 21v-5" }),
    path({ "d": "M3 14h4" }),
    path({ "d": "M5 10V3" }),
    path({ "d": "M5 21v-7" }),
  );
};
