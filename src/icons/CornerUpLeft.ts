// VanJS Lucide - CornerUpLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CornerUpLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M20 20v-7a4 4 0 0 0-4-4H4" }),
    path({ "d": "M9 14 4 9l5-5" }),
  );
};
