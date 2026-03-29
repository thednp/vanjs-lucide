// VanJS Lucide - TrendingDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TrendingDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 17h6v-6" }),
    path({ "d": "m22 17-8.5-8.5-5 5L2 7" }),
  );
};
