// VanJS Lucide - Maximize2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Maximize2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M15 3h6v6" }),
    path({ "d": "m21 3-7 7" }),
    path({ "d": "m3 21 7-7" }),
    path({ "d": "M9 21H3v-6" }),
  );
};
