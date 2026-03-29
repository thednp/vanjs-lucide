// VanJS Lucide - SlidersHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SlidersHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 5H3" }),
    path({ "d": "M12 19H3" }),
    path({ "d": "M14 3v4" }),
    path({ "d": "M16 17v4" }),
    path({ "d": "M21 12h-9" }),
    path({ "d": "M21 19h-5" }),
    path({ "d": "M21 5h-7" }),
    path({ "d": "M8 10v4" }),
    path({ "d": "M8 12H3" }),
  );
};
