// VanJS Lucide - CornerUpRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CornerUpRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m15 14 5-5-5-5" }),
    path({ "d": "M4 20v-7a4 4 0 0 1 4-4h12" }),
  );
};
