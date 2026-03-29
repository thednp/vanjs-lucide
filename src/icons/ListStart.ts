// VanJS Lucide - ListStart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListStart = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M3 5h6" }),
    path({ "d": "M3 12h13" }),
    path({ "d": "M3 19h13" }),
    path({ "d": "m16 8-3-3 3-3" }),
    path({ "d": "M21 19V7a2 2 0 0 0-2-2h-6" }),
  );
};
