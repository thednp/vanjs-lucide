// VanJS Lucide - TrendingUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TrendingUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 7h6v6" }),
    path({ "d": "m22 7-8.5 8.5-5-5L2 17" }),
  );
};
